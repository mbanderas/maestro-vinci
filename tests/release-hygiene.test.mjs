import assert from "node:assert/strict";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";

import { collectViolations, runHygiene } from "../scripts/release-hygiene.mjs";

async function withTree(files, callback) {
  const root = await mkdtemp(join(tmpdir(), "vinci-hygiene-test-"));
  try {
    for (const [file, content] of Object.entries(files)) {
      const path = join(root, ...file.split("/"));
      await mkdir(join(path, ".."), { recursive: true });
      await writeFile(path, content);
    }
    await callback(root);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
}

test("current release tree passes hygiene", async () => {
  const result = await runHygiene();
  assert.deepEqual(result.violations, []);
});

test("hygiene rejects excluded custody paths and archives", async () => {
  await withTree({
    "training/notes.md": "private notes\n",
    "assets/source.zip": Buffer.from([0x50, 0x4b, 0x03, 0x04, 0, 0]),
  }, async (root) => {
    const violations = await collectViolations({ root, files: ["training/notes.md", "assets/source.zip"] });
    assert.equal(violations.length, 2);
  });
});

test("hygiene rejects local paths and assigned secrets", async () => {
  const localPath = ["C:", "Users", "person", "Downloads", "source.txt"].join("\\");
  const secretName = ["api", "key"].join("_");
  await withTree({
    "README.md": `${localPath}\n${secretName} = "replace-with-real-secret"\n`,
  }, async (root) => {
    const violations = await collectViolations({ root, files: ["README.md"] });
    assert.equal(violations.length, 2);
    assert.ok(violations.some((item) => item.includes("absolute user-home path")));
    assert.ok(violations.some((item) => item.includes("generic assigned secret")));
  });
});

test("hygiene rejects unexpected binary files", async () => {
  await withTree({ "assets/unreviewed.bin": Buffer.from([0, 1, 2, 3]) }, async (root) => {
    const violations = await collectViolations({ root, files: ["assets/unreviewed.bin"] });
    assert.deepEqual(violations, ["assets/unreviewed.bin: unexpected binary file"]);
  });
});
