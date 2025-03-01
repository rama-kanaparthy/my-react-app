import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserCard from "./UserCard";

describe("UserCard Component", () => {
  test("renders the UserCard with name and age", () => {
    render(<UserCard name="John Doe" age={30} />);

    const userCard = screen.getByTestId("user-card");
    expect(userCard).toBeInTheDocument();

    const nameElement = screen.getByText("John Doe");
    expect(nameElement).toBeInTheDocument();

    const ageElement = screen.getByText("Age: 30");
    expect(ageElement).toBeInTheDocument();
  });

  test("renders a different user correctly", () => {
    render(<UserCard name="Jane Smith" age={25} />);

    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    expect(screen.getByText("Age: 25")).toBeInTheDocument();
  });
});
