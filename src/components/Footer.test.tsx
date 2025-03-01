import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("renders footer with dynamic year", () => {
  render(<Footer />);
  const currentYear = new Date().getFullYear();
  const footerText = screen.getByText(`© ${currentYear} My Website. All rights reserved.`);
  expect(footerText).toBeInTheDocument();
});
