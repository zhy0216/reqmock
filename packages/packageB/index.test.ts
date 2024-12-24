import { expect, test } from "bun:test";
import { b } from "./index.ts";

test("monorepo just work", () => {
  expect(b).toBe(2);
});
