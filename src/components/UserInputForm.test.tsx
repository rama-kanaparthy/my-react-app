import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserInputForm from "./UserInputForm";

test("captures user input and displays it after submission", () => {
  render(<UserInputForm />);

  const inputField = screen.getByPlaceholderText("Enter text...");
  const submitButton = screen.getByText("Submit");

  fireEvent.change(inputField, { target: { value: "Hello World" } });
  fireEvent.click(submitButton);

  expect(screen.getByText("Submitted: Hello World")).toBeInTheDocument();
});
