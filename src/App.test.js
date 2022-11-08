import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("screen to show a button with text", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: "change color to blue" });

  expect(button).toHaveStyle({ backgroundColor: "red" });
});

test("button turns blue when clicked and change textw", () => {
  render(<App />);

  const button = screen.getByRole("button", { backgroundColor: "red" });

  fireEvent.click(button);

  expect(button).toHaveStyle({ backgroundColor: "blue" });
  expect(button).toHaveTextContent("change color to red");
});
