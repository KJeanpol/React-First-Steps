import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "../src/MyAwesomeApp";
import { render, screen } from "@testing-library/react";
describe("My Awesome App Test Suit", () => {
  test("Should render firstName and lastName with RENDER", () => {
    //vitest crea un DOM virtual con jsdom
    // render es para pruebas de snapshot o pruebas donde se requiera inspeccionar el DOM
    // 1. arrange

    const { container } = render(<MyAwesomeApp />);

    // 2. act
    const h1 = container.querySelector("h1");
    console.log(h1?.innerHTML);

    // 3. assert
    expect(h1?.innerHTML).toContain("Jeanpol");
  });

  test("Should render firstName and lastName with SCREEN", () => {
    //vitest crea un DOM virtual con jsdom
    // screen es conveniente para pruebas donde se requiera interaccion

    // 1. arrange
    render(<MyAwesomeApp />);
    screen.debug();
    // 2. act
    const h1 = screen.getByRole("heading", { level: 1 });
    const h3 = screen.getByRole("heading", { level: 3 });

    // 3. assert
    expect(h1.innerHTML).toContain("Jeanpol");
  });

  test("Should match Snapshot with RENDER", () => {
    // es como poner un candado a la estructura HTML
    // 1. arrange
    const { container } = render(<MyAwesomeApp />);

    screen.debug();
    // 2. act

    // 3. assert
    expect(container).toMatchSnapshot();
  });
});
