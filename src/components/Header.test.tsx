import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest"; // Only import vitest functions
import Header from "./Header"; // Import your component

describe("Header Component", () => {
  test("renders the header text", () => {
    render(<Header />);

    const headingElement = screen.getByRole("heading", { name: /my react app/i });
    expect(headingElement).toBeInTheDocument(); // This will work globally
  });
});
