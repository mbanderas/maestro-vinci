#!/usr/bin/env node

import { createHash } from "node:crypto";
import { access, readFile, readdir } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const DEFAULT_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const VERSION = "1.3.1";
const PLUGIN_NAME = "maestro-vinci";
const SKILL_NAME = "vinci";

const CRAFT_FILES = [
  "references/craft/checklists/pitfalls.md",
  "references/craft/checklists/pre-delivery.md",
  "references/craft/doctrine/01-design-process.md",
  "references/craft/doctrine/02-asking-questions.md",
  "references/craft/doctrine/03-hi-fi-design.md",
  "references/craft/doctrine/04-typography.md",
  "references/craft/doctrine/05-color.md",
  "references/craft/doctrine/06-layout-and-spacing.md",
  "references/craft/doctrine/07-content-and-copy.md",
  "references/craft/doctrine/08-imagery-and-icons.md",
  "references/craft/doctrine/09-motion-and-animation.md",
  "references/craft/doctrine/10-interactive-prototypes.md",
  "references/craft/doctrine/11-state-and-data.md",
  "references/craft/doctrine/12-forms-and-inputs.md",
  "references/craft/doctrine/13-design-systems.md",
  "references/craft/doctrine/14-variations-and-tweaks.md",
  "references/craft/doctrine/15-decks-and-presentations.md",
  "references/craft/doctrine/16-accessibility.md",
  "references/craft/doctrine/17-responsive-design.md",
  "references/craft/doctrine/18-common-pitfalls.md",
  "references/craft/doctrine/19-checklist.md",
  "references/craft/doctrine/README.md",
];

const REQUIRED_SKILL_FILES = [
  "SKILL.md",
  "agents/openai.yaml",
  "assets/icon.png",
  "assets/maestro-vinci-banner.png",
  "references/catalog/annotations.md",
  "references/catalog/fingerprint.json",
  "references/catalog/patterns.md",
  "references/design-doctrine.md",
  "references/design-operations.md",
  "references/interface-evaluation.md",
  "references/persona.md",
  "references/visual-validation.md",
  ...CRAFT_FILES,
].sort();

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

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

async function readJson(path, errors, label) {
  try {
    return JSON.parse(await readFile(path, "utf8"));
  } catch (error) {
    errors.push(`${label} is not valid JSON: ${error.message}`);
    return {};
  }
}

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) return null;
  const fields = new Map();
  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (field) fields.set(field[1], field[2].trim().replace(/^['"]|['"]$/g, ""));
  }
  return fields;
}

function markdownLinks(markdown) {
  const links = [];
  const pattern = /!?\[[^\]]*\]\(([^)\s]+)(?:\s+["'][^)]*)?\)/g;
  for (const match of markdown.matchAll(pattern)) {
    const target = match[1].replace(/^<|>$/g, "");
    if (/^(?:[a-z]+:|#)/i.test(target)) continue;
    links.push(decodeURIComponent(target.split(/[?#]/, 1)[0]));
  }
  return links;
}

async function sha256(path) {
  return createHash("sha256").update(await readFile(path)).digest("hex");
}

async function pngDimensions(path) {
  const image = await readFile(path);
  if (image.length < 24 || image.subarray(1, 4).toString("ascii") !== "PNG") {
    return null;
  }
  return { width: image.readUInt32BE(16), height: image.readUInt32BE(20) };
}

function yamlValue(content, key) {
  const match = content.match(new RegExp(`^\\s*${key}:\\s*"([^"]+)"\\s*$`, "m"));
  return match?.[1] ?? null;
}

export async function validateRoot(root = DEFAULT_ROOT) {
  const errors = [];
  const check = (condition, message) => {
    if (!condition) errors.push(message);
  };

  const requiredRootFiles = [
    ".agents/plugins/marketplace.json",
    ".claude-plugin/marketplace.json",
    ".claude-plugin/plugin.json",
    ".codex-plugin/plugin.json",
    ".github/workflows/validate.yml",
    "DISCLAIMER.md",
    "EXPORT_MANIFEST.json",
    "LICENSE",
    "PRIVACY.md",
    "README.md",
    "SECURITY.md",
    "THIRD_PARTY_NOTICES.md",
    "assets/PROVENANCE.md",
    "assets/icon.png",
    "assets/maestro-vinci-banner.png",
    "package.json",
    "scripts/install.mjs",
    "scripts/pack-check.mjs",
    "scripts/release-hygiene.mjs",
    "scripts/validate.mjs",
  ];
  for (const file of requiredRootFiles) {
    check(await exists(join(root, file)), `missing required file: ${file}`);
  }

  const skillsRoot = join(root, "skills");
  const skillDirs = (await readdir(skillsRoot, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
  check(JSON.stringify(skillDirs) === JSON.stringify([SKILL_NAME]), `skills/ must expose only ${SKILL_NAME}; found ${skillDirs.join(", ")}`);

  const skillRoot = join(skillsRoot, SKILL_NAME);
  const skillFiles = (await listFiles(skillRoot)).sort();
  check(
    JSON.stringify(skillFiles) === JSON.stringify(REQUIRED_SKILL_FILES),
    `skill file set differs from the reviewed allowlist`,
  );

  const packageJson = await readJson(join(root, "package.json"), errors, "package.json");
  const codex = await readJson(join(root, ".codex-plugin", "plugin.json"), errors, ".codex-plugin/plugin.json");
  const claude = await readJson(join(root, ".claude-plugin", "plugin.json"), errors, ".claude-plugin/plugin.json");
  const codexMarket = await readJson(join(root, ".agents", "plugins", "marketplace.json"), errors, ".agents/plugins/marketplace.json");
  const claudeMarket = await readJson(join(root, ".claude-plugin", "marketplace.json"), errors, ".claude-plugin/marketplace.json");
  const exportManifest = await readJson(join(root, "EXPORT_MANIFEST.json"), errors, "EXPORT_MANIFEST.json");
  const catalog = await readJson(join(skillRoot, "references", "catalog", "fingerprint.json"), errors, "catalog/fingerprint.json");

  check(packageJson.name === "@maestrovinci/vinci", "package name must be @maestrovinci/vinci");
  check(packageJson.version === VERSION, `package version must be ${VERSION}`);
  check(codex.name === PLUGIN_NAME, `Codex plugin name must be ${PLUGIN_NAME}`);
  check(codex.version === VERSION, `Codex plugin version must be ${VERSION}`);
  check(claude.name === PLUGIN_NAME, `Claude plugin name must be ${PLUGIN_NAME}`);
  check(claude.version === VERSION, `Claude plugin version must be ${VERSION}`);
  check(exportManifest.version === VERSION, `export manifest version must be ${VERSION}`);
  check(exportManifest.release_provenance_id === "maestro-vinci-1.3.1-2026-08-12", "export manifest provenance ID is wrong");
  check(!("source_repository" in exportManifest), "export manifest must not disclose a private source repository");
  check(!("source_commit" in exportManifest), "export manifest must not disclose a private source commit");
  check(exportManifest.policy?.private_source_commit_identifier_disclosed === false, "export manifest must keep private source commit identifiers undisclosed");
  check(exportManifest.policy?.strict_allowlist === true, "export manifest must declare strict_allowlist");
  check(exportManifest.policy?.raw_external_images_included === false, "export manifest must exclude raw external images");

  check(codex.skills === "./skills/", "Codex plugin must discover ./skills/");
  check(!("apps" in codex), "Codex plugin must not declare apps without an app manifest");
  check(!("mcpServers" in codex), "Codex plugin must not declare MCP servers");
  check(!("hooks" in codex), "Codex plugin must not declare unsupported hooks");
  check(codex.interface?.displayName === "Maestro: Vinci", "Codex display name is wrong");
  check(Array.isArray(codex.interface?.defaultPrompt), "Codex defaultPrompt must be an array");
  check((codex.interface?.defaultPrompt?.length ?? 0) <= 3, "Codex defaultPrompt supports at most three entries");
  for (const prompt of codex.interface?.defaultPrompt ?? []) {
    check(prompt.length <= 128, "Codex defaultPrompt entry exceeds 128 characters");
    check(prompt.includes("/vinci"), "Codex defaultPrompt entries must invoke /vinci");
  }

  const codexEntry = codexMarket.plugins?.[0];
  check(codexMarket.name === PLUGIN_NAME, "Codex marketplace name is wrong");
  check(codexEntry?.name === PLUGIN_NAME, "Codex marketplace plugin name is wrong");
  check(codexEntry?.source?.source === "url", "Codex team marketplace must use a URL source");
  check(codexEntry?.source?.url === "https://github.com/mbanderas/maestro-vinci.git", "Codex team marketplace URL is wrong");
  check(codexEntry?.policy?.installation === "AVAILABLE", "Codex marketplace installation policy is wrong");
  check(codexEntry?.policy?.authentication === "ON_INSTALL", "Codex marketplace authentication policy is wrong");
  check(codexEntry?.category === "Productivity", "Codex marketplace category is wrong");

  const claudeEntry = claudeMarket.plugins?.[0];
  check(claudeMarket.name === PLUGIN_NAME, "Claude marketplace name is wrong");
  check(claudeEntry?.name === PLUGIN_NAME, "Claude marketplace plugin name is wrong");
  check(claudeEntry?.source === "./", "Claude marketplace source must be ./");

  const skill = await readFile(join(skillRoot, "SKILL.md"), "utf8");
  const frontmatter = parseFrontmatter(skill);
  check(frontmatter !== null, "SKILL.md must have YAML frontmatter");
  if (frontmatter) {
    check(JSON.stringify([...frontmatter.keys()]) === JSON.stringify(["name", "description"]), "SKILL.md frontmatter must contain only name and description");
    check(frontmatter.get("name") === SKILL_NAME, "SKILL.md name must match the vinci folder");
    const description = frontmatter.get("description") ?? "";
    check(description.length > 80 && description.length <= 1024, "SKILL.md description must be informative and at most 1024 characters");
    check(description.includes("$vinci") && description.includes("/vinci"), "SKILL.md description must declare $vinci and /vinci invocation");
  }
  check(!skill.includes("[TODO"), "SKILL.md contains a scaffold placeholder");

  const openaiYaml = await readFile(join(skillRoot, "agents", "openai.yaml"), "utf8");
  check(yamlValue(openaiYaml, "display_name") === "Maestro: Vinci", "openai.yaml display_name is wrong");
  const shortDescription = yamlValue(openaiYaml, "short_description") ?? "";
  check(shortDescription.length >= 25 && shortDescription.length <= 64, "openai.yaml short_description must be 25 to 64 characters");
  check((yamlValue(openaiYaml, "default_prompt") ?? "").includes("$vinci"), "openai.yaml default_prompt must mention $vinci");
  for (const key of ["icon_small", "icon_large"]) {
    const value = yamlValue(openaiYaml, key);
    check(Boolean(value), `openai.yaml ${key} is required`);
    if (value) check(await exists(resolve(skillRoot, value)), `openai.yaml ${key} target is missing: ${value}`);
  }

  const rootIcon = await pngDimensions(join(root, "assets", "icon.png"));
  const rootBanner = await pngDimensions(join(root, "assets", "maestro-vinci-banner.png"));
  check(rootIcon?.width === 1254 && rootIcon?.height === 1254, "root icon dimensions must be 1254 x 1254");
  check(rootBanner?.width === 1774 && rootBanner?.height === 887, "root banner dimensions must be 1774 x 887");

  const assetExpected = new Map(exportManifest.asset_inputs?.flatMap((item) =>
    item.outputs.map((output) => [output, item.sha256])) ?? []);
  for (const [output, expected] of assetExpected) {
    check(await sha256(join(root, output)) === expected, `${output} does not match its export hash`);
  }

  for (const item of exportManifest.catalog_inputs ?? []) {
    check(await sha256(join(root, item.output)) === item.sha256, `${item.output} does not match its export hash`);
  }
  for (const [file, expected] of exportManifest.craft_inputs?.files ?? []) {
    const output = join(root, exportManifest.craft_inputs.output_root, file);
    const entry = exportManifest.craft_inputs.files.find((candidate) => candidate[0] === file);
    const outputExpected = entry?.[2] ?? expected;
    check(await sha256(output) === outputExpected, `${relative(root, output)} does not match its export hash`);
  }

  check(catalog.provenance?.raw_captures_included === false, "catalog must declare that raw captures are excluded");
  check(catalog.provenance?.release_provenance_id === "reference-catalog-2026-08-12", "catalog provenance ID is wrong");
  check(!("source_repository" in (catalog.provenance ?? {})), "catalog must not disclose a private source repository");
  check(!("source_commit" in (catalog.provenance ?? {})), "catalog must not disclose a private source commit");
  check(catalog.retrieval_policy?.max_sources_per_task === 3, "catalog task retrieval cap must remain 3");
  check(catalog.retrieval_policy?.max_sources_per_phase === 2, "catalog phase retrieval cap must remain 2");

  const pluginAssetPaths = [
    codex.interface?.composerIcon,
    codex.interface?.logo,
  ].filter(Boolean);
  for (const path of pluginAssetPaths) {
    check(path.startsWith("./assets/"), `Codex plugin asset must be under ./assets/: ${path}`);
    check(await exists(resolve(root, path)), `Codex plugin asset is missing: ${path}`);
  }

  const allFiles = (await listFiles(root)).filter((file) =>
    !file.startsWith(".git/") && !file.startsWith("node_modules/"),
  );
  const jsonFiles = allFiles.filter((file) => file.endsWith(".json"));
  for (const file of jsonFiles) await readJson(join(root, file), errors, file);
  const markdownFiles = allFiles.filter((file) => file.endsWith(".md"));
  for (const file of markdownFiles) {
    const content = await readFile(join(root, file), "utf8");
    for (const link of markdownLinks(content)) {
      check(await exists(resolve(dirname(join(root, file)), link)), `${file} has a broken relative link: ${link}`);
    }
  }

  const textFiles = allFiles.filter((file) => /\.(?:json|md|mjs|ya?ml)$/.test(file));
  for (const file of textFiles) {
    const content = await readFile(join(root, file), "utf8");
    check(!content.includes("\r\n"), `${file} must use LF line endings`);
    check(!/[ \t]+$/m.test(content), `${file} contains trailing whitespace`);
    check(content.endsWith("\n"), `${file} must end with a newline`);
  }

  return errors;
}

function isDirectRun() {
  return process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
}

if (isDirectRun()) {
  const errors = await validateRoot();
  if (errors.length > 0) {
    process.stderr.write(`Validation failed with ${errors.length} finding(s):\n`);
    for (const error of errors) process.stderr.write(`- ${error}\n`);
    process.exitCode = 1;
  } else {
    process.stdout.write(`Validation passed: ${PLUGIN_NAME} ${VERSION}, one public skill (${SKILL_NAME}), ${REQUIRED_SKILL_FILES.length} skill files\n`);
  }
}
