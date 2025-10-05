import { add, substract } from "./math.helper";
import { describe, expect, test } from "vitest";

describe("Add", () => {
  test("Should add two positive numbers", () => {
    // 1. arrange
    const a = 2;
    const b = 1;

    // 2. act
    const result = add(a, b);
    console.log({ result });
    // 3. assert

    expect(result).toBe(3);
  });
  test("Should add two negative numbers", () => {
    // 1. arrange
    const a = -2;
    const b = -1;

    // 2. act
    const result = add(a, b);
    console.log({ result });
    // 3. assert

    expect(result).toBe(-3);
  });
});

describe("Subtract", () => {
  test("Should subtract two positive numbers", () => {
    // 1. arrange
    const a = 2;
    const b = 1;

    // 2. act
    const result = substract(a, b);
    console.log({ result });
    // 3. assert

    expect(result).toBe(1);
  });
});

describe("Divide", () => {
  test("Should subtract two positive numbers", () => {
    // 1. arrange
    const a = 2;
    const b = 1;

    // 2. act
    const result = substract(a, b);
    console.log({ result });
    // 3. assert

    expect(result).toBe(1);
  });
});
