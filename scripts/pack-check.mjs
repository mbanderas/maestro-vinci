#!/usr/bin/env node

import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtemp, readdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

async function listFiles(root, base = root) {
  const entries = await readdir(root, { withFileTypes: true });
  const files = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const path = join(root, entry.name);
    if (entry.isDirectory()) files.push(...(await listFiles(path, base)));
    else if (entry.isFile()) files.push(relative(base, path).replaceAll("\\", "/"));
  }
  return files;
}

export async function expectedPackageFiles(root = ROOT) {
  const fixed = [
    ".agents/plugins/marketplace.json",
    ".claude-plugin/marketplace.json",
    ".claude-plugin/plugin.json",
    ".codex-plugin/plugin.json",
    "DISCLAIMER.md",
    "EXPORT_MANIFEST.json",
    "LICENSE",
    "package.json",
    "PRIVACY.md",
    "README.md",
    "scripts/install.mjs",
    "SECURITY.md",
    "THIRD_PARTY_NOTICES.md",
  ];
  const assets = (await listFiles(join(root, "assets"))).map((file) => `assets/${file}`);
  const skill = (await listFiles(join(root, "skills", "vinci"))).map((file) => `skills/vinci/${file}`);
  return [...fixed, ...assets, ...skill].sort();
}

export async function inspectPackage(root = ROOT) {
  const cache = await mkdtemp(join(tmpdir(), "vinci-npm-pack-"));
  try {
    const npmCli = process.env.npm_execpath;
    const packArgs = ["pack", "--dry-run", "--json", "--ignore-scripts", "--cache", cache];
    const useShell = !npmCli && process.platform === "win32";
    const command = npmCli
      ? process.execPath
      : useShell
        ? ["npm.cmd", ...packArgs].map((part) => (part.includes(" ") ? `"${part}"` : part)).join(" ")
        : "npm";
    const args = npmCli ? [npmCli, ...packArgs] : useShell ? undefined : packArgs;
    const result = spawnSync(command, args, {
      cwd: root,
      encoding: "utf8",
      windowsHide: true,
      shell: useShell,
    });
    if (result.error) throw result.error;
    assert.equal(result.status, 0, result.stderr || result.stdout);
    const payload = JSON.parse(result.stdout);
    const packages = Array.isArray(payload) ? payload : Object.values(payload);
    assert.equal(packages.length, 1, "npm pack should describe exactly one package");
    assert.ok(Array.isArray(packages[0]?.files), "npm pack did not report a file list");
    return {
      files: packages[0].files.map((file) => file.path.replaceAll("\\", "/")).sort(),
      unpackedSize: packages[0].unpackedSize,
    };
  } finally {
    await rm(cache, { force: true, recursive: true });
  }
}

function isDirectRun() {
  return process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
}

if (isDirectRun()) {
  const [actual, expected] = await Promise.all([inspectPackage(), expectedPackageFiles()]);
  assert.deepEqual(actual.files, expected, "npm package contents differ from the reviewed allowlist");
  assert.ok(actual.unpackedSize < 12_000_000, `npm package is unexpectedly large: ${actual.unpackedSize} bytes`);
  process.stdout.write(`Package contents passed: ${actual.files.length} files, ${actual.unpackedSize} unpacked bytes\n`);
}
