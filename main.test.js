import { test, expect } from "vitest";
import {combat} from "./main.js";

test("armour", () => {
    const expected = 16;
    const actual = combat(40, 30, 70);
    expect(actual).toBe(expected);
});

test("no armour", () => {
    const expected = 10;
    const actual = combat(40, 30, 50);
    expect(actual).toBe(expected);
});

/*

import { test, expect } from "vitest";
import { checkLength } from "./main.js";

test("should return -1 for strings with an odd length", () => {
  const expected = -1;
  const actual = checkLength("table");
  expect(actual).toBe(expected);
});

test("should return 1 for strings with an even length", () => {
  const expected = 1;
  const actual = checkLength("wizard");
  expect(actual).toBe(expected);
});
*/