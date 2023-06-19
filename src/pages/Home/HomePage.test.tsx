import { screen } from "@testing-library/react";
import HomePage from ".";
import { render } from "@tests/tests-utils";

describe("HomePage", () => {
  it("should render correctly", () => {
    render(<HomePage />);
    const titleElement = screen.getByText(/Home/i);
    expect(titleElement).toBeInTheDocument();
  });
});
