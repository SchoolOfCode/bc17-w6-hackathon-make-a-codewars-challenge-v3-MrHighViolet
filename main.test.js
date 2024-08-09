import { test, expect } from "vitest";
import { combat } from "./main.js";

test("Armour with training", () => {
    const expected = 33;
    const actual = combat({
      health: 40,
      armour: true,
      training: 13}, 30);
    expect(actual).toBe(expected);
});

test("Armour without training", () => {
  const expected = 25;
  const actual = combat({
    health: 40,
    armour: true,
    training: 11}, 30);
  expect(actual).toBe(expected);
});

test("No armour", () => {
    const expected = 20;
    const actual = combat({
      health: 40,
      armour: false,
      training: 46}, 20);
    expect(actual).toBe(expected);
});

test("No armour, fatal blow & cockroach", () => {
  const expected = 5;
  const actual = combat({
    health: 40,
    armour: false,
    training: 25}, 59);
  expect(actual).toBe(expected);
});

test("No armour, fatal blow", () => {
  const expected = 0;
  const actual = combat({
    health: 40,
    armour: false,
    training: 21}, 59);
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