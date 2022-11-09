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

test("initial conditions", () => {
  render(<App />);
  // button should be enabled
  const colorButton = screen.getByRole("button", {
    name: "change color to blue",
  });
  expect(colorButton).toBeEnabled();

  // checkbox should be unchecked
  const checkbox = screen.getByRole("checkbox", { checked: false });
  expect(checkbox).not.toBeChecked(); // use `not` on Custom Matcher's for opposite match
});

test("button state w.r.t to checkbox state", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "change color to blue",
  });
  const checkbox = screen.getByRole("checkbox");

  // click checkbox - check it is checked and button is disabled
  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();

  // click again on checkbox - check it is unchecked and button is enabled
  fireEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
});
