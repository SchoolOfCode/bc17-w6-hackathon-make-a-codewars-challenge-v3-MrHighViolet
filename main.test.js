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