import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders JunkPile", () => {
  render(<App />);
  const linkElement = screen.getByText(/JunkPile/i);
  expect(linkElement).toBeInTheDocument();
});
