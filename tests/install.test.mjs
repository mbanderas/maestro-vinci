import assert from "node:assert/strict";
import { mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, relative, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const INSTALLER = join(ROOT, "scripts", "install.mjs");
const SOURCE = join(ROOT, "skills", "vinci");

function run(args) {
  return spawnSync(process.execPath, [INSTALLER, ...args], {
    cwd: ROOT,
    encoding: "utf8",
    windowsHide: true,
  });
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

async function assertInstalled(destination) {
  const [sourceFiles, installedFiles] = await Promise.all([listFiles(SOURCE), listFiles(destination)]);
  assert.deepEqual(installedFiles, sourceFiles);
  for (const file of sourceFiles) {
    const [source, installed] = await Promise.all([
      readFile(join(SOURCE, file)),
      readFile(join(destination, file)),
    ]);
    assert.deepEqual(installed, source, file);
  }
}

async function withTemp(callback) {
  const root = await mkdtemp(join(tmpdir(), "vinci-install-test-"));
  try {
    await callback(root);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
}

test("universal user install writes shared and Claude skills", async () => {
  await withTemp(async (home) => {
    const result = run(["--target", "universal", "--home", home]);
    assert.equal(result.status, 0, result.stderr);
    await assertInstalled(join(home, ".agents", "skills", "vinci"));
    await assertInstalled(join(home, ".claude", "skills", "vinci"));
  });
});

test("project targets use documented host locations", async () => {
  for (const [target, parts] of [["codex", [".agents", "skills"]], ["claude", [".claude", "skills"]]]) {
    await withTemp(async (project) => {
      const result = run(["--target", target, "--scope", "project", "--project", project]);
      assert.equal(result.status, 0, result.stderr);
      await assertInstalled(join(project, ...parts, "vinci"));
    });
  }
});

test("different existing copy requires force", async () => {
  await withTemp(async (home) => {
    const args = ["--target", "shared", "--home", home];
    assert.equal(run(args).status, 0);
    const skill = join(home, ".agents", "skills", "vinci", "SKILL.md");
    await writeFile(skill, "different\n", "utf8");
    const refused = run(args);
    assert.equal(refused.status, 1);
    assert.match(refused.stderr, /differs/);
    const replaced = run([...args, "--force"]);
    assert.equal(replaced.status, 0, replaced.stderr);
    await assertInstalled(join(home, ".agents", "skills", "vinci"));
  });
});

test("dry run reports destinations without writing", async () => {
  await withTemp(async (home) => {
    const result = run(["--target", "universal", "--home", home, "--dry-run"]);
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /would install/);
    await assert.rejects(readFile(join(home, ".agents", "skills", "vinci", "SKILL.md")));
  });
});
