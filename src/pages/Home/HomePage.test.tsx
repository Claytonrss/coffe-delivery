import { render, screen } from "@testing-library/react";
import HomePage from ".";

describe("HomePage", () => {
  it("should render correctly", () => {
    render(<HomePage />);
    const titleElement = screen.getByText(/Home/i);
    expect(titleElement).toBeInTheDocument();
  });
});
