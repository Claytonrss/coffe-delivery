import { TextTypes, theme } from "@styles/theme";
import { render } from "@tests/tests-utils";
import Text from ".";

describe("<Text />", () => {
  const tag = "p";
  const styleName: TextTypes = "textL";
  const text = "Hello, World!";
  const { fontFamily, styles } = theme.fonts.text;

  let textElement: HTMLElement;

  beforeEach(() => {
    const { getByText } = render(
      <Text tag={tag} styleName={styleName}>
        {text}
      </Text>
    );
    textElement = getByText(text);
  });

  it("should render with the correct tag", () => {
    expect(textElement.tagName.toLowerCase()).toBe(tag);
  });

  it("should apply the correct font-family", () => {
    expect(textElement).toHaveStyle(`font-family: ${fontFamily}`);
  });

  it("should apply the correct font-size", () => {
    expect(textElement).toHaveStyle(`font-size: ${styles[styleName].size}`);
  });

  it("should apply the correct line-height", () => {
    expect(textElement).toHaveStyle(
      `line-height: ${styles[styleName].lineHeight}`
    );
  });

  it("should apply the correct font-weight", () => {
    expect(textElement).toHaveStyle(`font-weight: ${styles[styleName].weight}`);
  });
});
