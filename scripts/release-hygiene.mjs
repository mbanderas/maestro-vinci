#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { lstat, readFile, readdir } from "node:fs/promises";
import { dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const DEFAULT_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const TEXT_SIZE_LIMIT = 500_000;

const ALLOWED_TOP_LEVEL = new Set([
  ".agents",
  ".claude-plugin",
  ".codex-plugin",
  ".gitattributes",
  ".github",
  ".gitignore",
  "assets",
  "disclaimer.md",
  "export_manifest.json",
  "license",
  "package-lock.json",
  "package.json",
  "privacy.md",
  "readme.md",
  "scripts",
  "security.md",
  "skills",
  "tests",
  "third_party_notices.md",
]);

const FORBIDDEN_EXTENSIONS = new Set([
  ".7z", ".avi", ".db", ".doc", ".docx", ".gz", ".log", ".mkv", ".mov",
  ".mp3", ".mp4", ".pdf", ".ppt", ".pptx", ".rar", ".sqlite", ".sqlite3",
  ".tar", ".tgz", ".wav", ".webm", ".xls", ".xlsx", ".zip",
]);

const APPROVED_BINARY_FILES = new Set([
  "assets/icon.png",
  "assets/maestro-vinci-banner.png",
  "skills/vinci/assets/icon.png",
  "skills/vinci/assets/maestro-vinci-banner.png",
]);

const FORBIDDEN_SEGMENTS = new Set([
  "audits",
  "browser-data",
  "browser-profile",
  "browser-profiles",
  "database",
  "holdout",
  "logs",
  "memory",
  "meta-prompts",
  "training",
]);

const SECRET_PATTERNS = [
  { label: "private key material", pattern: new RegExp(["BEGIN", "PRIVATE", "KEY"].join("[ _-]+"), "i") },
  { label: "GitHub token prefix", pattern: new RegExp(["gh", "p_[A-Za-z0-9]{20,}"].join(""), "i") },
  { label: "OpenAI secret prefix", pattern: new RegExp(["(?:^|[^A-Za-z0-9])s", "k-(?:proj-)?[A-Za-z0-9_-]{20,}"].join("")) },
  { label: "generic assigned secret", pattern: /(?:api[_-]?key|client[_-]?secret|access[_-]?token|refresh[_-]?token|password)\s*[:=]\s*["'][^"'\r\n]{8,}["']/i },
];

const LOCAL_PATH_PATTERNS = [
  /[A-Za-z]:[\\/]Users[\\/][^\s"'<>]+/i,
  /\/(?:Users|home)\/[^\s"'<>]+/,
];

function normalizePath(value) {
  return value.replaceAll("\\", "/").replace(/^\.\//, "");
}

async function walk(root, base = root) {
  const entries = await readdir(root, { withFileTypes: true });
  const files = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    if ([".git", "node_modules", "dist", "coverage"].includes(entry.name)) continue;
    const path = join(root, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(path, base)));
    else if (entry.isFile()) files.push(normalizePath(relative(base, path)));
  }
  return files;
}

export function gitVisibleFiles(root) {
  const result = spawnSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "-z"], {
    cwd: root,
    encoding: "utf8",
    windowsHide: true,
  });
  if (result.error || result.status !== 0) return null;
  const files = [...new Set(result.stdout
    .split("\0")
    .filter(Boolean)
    .map(normalizePath)
    .filter((file) => existsSync(join(root, file))))].sort();
  return files.length > 0 ? files : null;
}

function isProbablyBinary(buffer) {
  return buffer.subarray(0, Math.min(buffer.length, 8192)).includes(0);
}

function hasForbiddenArchiveSignature(buffer) {
  const starts = (...bytes) => bytes.every((byte, index) => buffer[index] === byte);
  if (buffer.subarray(0, 5).toString("ascii") === "%PDF-") return true;
  if (starts(0x50, 0x4b, 0x03, 0x04) || starts(0x50, 0x4b, 0x05, 0x06)) return true;
  if (buffer.subarray(0, 4).toString("ascii") === "Rar!") return true;
  return starts(0x37, 0x7a, 0xbc, 0xaf, 0x27, 0x1c);
}

export async function collectViolations({ root, files }) {
  const violations = [];
  for (const input of files) {
    const file = normalizePath(input);
    const segments = file.toLowerCase().split("/");
    const top = segments[0];
    if (!ALLOWED_TOP_LEVEL.has(top)) {
      violations.push(`${file}: top-level path is not on the public release allowlist`);
      continue;
    }
    if (segments.some((segment) => FORBIDDEN_SEGMENTS.has(segment))) {
      violations.push(`${file}: path belongs to an excluded private artifact class`);
      continue;
    }
    if (FORBIDDEN_EXTENSIONS.has(extname(file).toLowerCase())) {
      violations.push(`${file}: private-source or archive file type is forbidden`);
      continue;
    }

    const absolute = resolve(root, file);
    const info = await lstat(absolute).catch(() => null);
    if (info?.isSymbolicLink()) {
      violations.push(`${file}: symbolic links are forbidden in release custody`);
      continue;
    }
    if (!info?.isFile()) {
      violations.push(`${file}: listed file is missing or is not a regular file`);
      continue;
    }

    const buffer = await readFile(absolute);
    if (hasForbiddenArchiveSignature(buffer)) {
      violations.push(`${file}: content has a forbidden archive or private-document signature`);
      continue;
    }
    if (isProbablyBinary(buffer)) {
      if (!APPROVED_BINARY_FILES.has(file)) violations.push(`${file}: unexpected binary file`);
      continue;
    }
    if (buffer.length > TEXT_SIZE_LIMIT) {
      violations.push(`${file}: text file exceeds ${TEXT_SIZE_LIMIT} bytes`);
      continue;
    }

    const content = buffer.toString("utf8");
    for (const { label, pattern } of SECRET_PATTERNS) {
      if (pattern.test(content)) violations.push(`${file}: contains ${label}`);
    }
    for (const pattern of LOCAL_PATH_PATTERNS) {
      if (pattern.test(content)) violations.push(`${file}: contains an absolute user-home path`);
    }
    if (content.includes(["SOURCE", "COMMIT", "PENDING"].join("_"))) {
      violations.push(`${file}: contains unresolved source provenance`);
    }
    const placeholder = new RegExp(["\\[", "TODO", "(?::|\\])"].join(""), "i");
    if (placeholder.test(content)) {
      violations.push(`${file}: contains a scaffold placeholder`);
    }
  }
  return violations;
}

export async function runHygiene(root = DEFAULT_ROOT) {
  const files = gitVisibleFiles(root) ?? (await walk(root));
  const violations = await collectViolations({ root, files });
  return { files, violations };
}

function isDirectRun() {
  return process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
}

if (isDirectRun()) {
  const { files, violations } = await runHygiene();
  if (violations.length > 0) {
    process.stderr.write(`Release hygiene failed with ${violations.length} finding(s):\n`);
    for (const finding of violations) process.stderr.write(`- ${finding}\n`);
    process.exitCode = 1;
  } else {
    process.stdout.write(`Release hygiene passed: ${files.length} public-tree files\n`);
  }
}
