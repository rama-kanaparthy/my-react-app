import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./Counter";

describe("Counter Component", () => {
  test("renders the counter with initial count", () => {
    render(<Counter />);
    expect(screen.getByTestId("count")).toHaveTextContent("Count: 0");
  });

  test("increments the counter", () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId("increment-btn");
    fireEvent.click(incrementButton);
    expect(screen.getByTestId("count")).toHaveTextContent("Count: 1");
  });

  test("decrements the counter", () => {
    render(<Counter />);
    const decrementButton = screen.getByTestId("decrement-btn");
    fireEvent.click(decrementButton);
    expect(screen.getByTestId("count")).toHaveTextContent("Count: -1");
  });

  test("resets the counter", () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId("increment-btn");
    const resetButton = screen.getByTestId("reset-btn");

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByTestId("count")).toHaveTextContent("Count: 2");

    fireEvent.click(resetButton);
    expect(screen.getByTestId("count")).toHaveTextContent("Count: 0");
  });
});
