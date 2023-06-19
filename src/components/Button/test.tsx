import { Heart, IconProps } from "@phosphor-icons/react";
import { screen } from "@testing-library/react";
import { render } from "@tests/tests-utils";
import Button from "./";

describe("<Button />", () => {
  const mockIcon: IconProps = <Heart data-testid="icon" />;
  const mockText = "mock text";

  it("should render the button with text correctly", () => {
    render(<Button variant="primary">{mockText}</Button>);
    expect(screen.getByText(mockText)).toBeInTheDocument();
  });

  it("should render the button with icon and text if passed", () => {
    render(
      <Button variant="primary" icon={mockIcon}>
        {mockText}
      </Button>
    );
    expect(screen.getByText(mockText)).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("should render the button with icon if passed", () => {
    render(<Button variant="primary" icon={mockIcon} />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
