import assert from "node:assert/strict";
import { cp, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { validateRoot } from "../scripts/validate.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

test("release tree passes structural validation", async () => {
  assert.deepEqual(await validateRoot(ROOT), []);
});

test("validator rejects manifest version drift", async () => {
  const temp = await mkdtemp(join(tmpdir(), "vinci-validate-test-"));
  try {
    await cp(ROOT, temp, {
      recursive: true,
      filter: (source) => !source.includes(`${join(ROOT, ".git")}`) && !source.includes(`${join(ROOT, "node_modules")}`),
    });
    const path = join(temp, ".codex-plugin", "plugin.json");
    const manifest = JSON.parse(await readFile(path, "utf8"));
    manifest.version = "9.9.9";
    await writeFile(path, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
    const errors = await validateRoot(temp);
    assert.ok(errors.some((error) => error.includes("Codex plugin version")));
  } finally {
    await rm(temp, { recursive: true, force: true });
  }
});
