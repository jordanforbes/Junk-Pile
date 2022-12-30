import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders JunkPile", () => {
  render(<Header />);
  const linkElement = screen.getByText(/JunkPile/i);
  expect(linkElement).toBeInTheDocument();
});
