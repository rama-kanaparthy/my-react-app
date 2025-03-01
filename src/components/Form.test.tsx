import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "./Form";

describe("Form Component", () => {
  test("renders the input field and submit button", () => {
    render(<Form />);
    
    expect(screen.getByTestId("input-field")).toBeInTheDocument();
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
  });

  test("updates input field when typing", () => {
    render(<Form />);
    
    const inputField = screen.getByTestId("input-field");
    fireEvent.change(inputField, { target: { value: "Hello" } });
    
    expect(inputField).toHaveValue("Hello");
  });

  test("clears input field after submit", () => {
    render(<Form />);
    
    const inputField = screen.getByTestId("input-field");
    const submitButton = screen.getByTestId("submit-button");

    fireEvent.change(inputField, { target: { value: "Test Input" } });
    fireEvent.click(submitButton);

    expect(inputField).toHaveValue(""); // Input should be cleared
  });
});
