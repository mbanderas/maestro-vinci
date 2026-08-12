import assert from "node:assert/strict";
import test from "node:test";

import { expectedPackageFiles, inspectPackage } from "../scripts/pack-check.mjs";

test("npm archive matches the reviewed package allowlist", async () => {
  const [actual, expected] = await Promise.all([inspectPackage(), expectedPackageFiles()]);
  assert.deepEqual(actual.files, expected);
  assert.ok(actual.unpackedSize < 12_000_000);
});
