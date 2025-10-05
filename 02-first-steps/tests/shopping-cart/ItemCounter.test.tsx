import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "../../src/shopping-cart/ItemCounter";

describe("ItemCounter", () => {
  test("Should render with default values", () => {
    // 1. Arrange

    const name = "Test Item";
    render(<ItemCounter name={name} />);

    // 2. Act
    screen.debug();
    // 3. Assert

    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(name)).not.toBeNull();
  });

  test("Should render with custom quantity", () => {
    // 1. Arrange

    const name = "Test Item";
    const quantity = 5;
    render(<ItemCounter name={name} quantity={quantity} />);

    // 2. Act
    screen.debug();
    // 3. Assert

    expect(screen.getByText(quantity)).toBeDefined();
    expect(screen.getByText(quantity)).not.toBeNull();
  });
});
