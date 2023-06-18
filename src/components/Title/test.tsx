import { TitleTypes, theme } from "@styles/theme";
import { render } from "@tests/tests-utils";
import Title from ".";

describe("<Title />", () => {
  const tag = "h1";
  const styleName: TitleTypes = "titleL";
  const text = "Hello, World!";
  const { fontFamily, styles } = theme.fonts.title;

  let titleElement: HTMLElement;

  beforeEach(() => {
    const { getByText } = render(
      <Title tag={tag} styleName={styleName}>
        {text}
      </Title>
    );
    titleElement = getByText(text);
  });

  it("should render with the correct tag", () => {
    expect(titleElement.tagName.toLowerCase()).toBe(tag);
  });

  it("should apply the correct font-family", () => {
    expect(titleElement).toHaveStyle(`font-family: ${fontFamily}`);
  });

  it("should apply the correct font-size", () => {
    expect(titleElement).toHaveStyle(`font-size: ${styles[styleName].size}`);
  });

  it("should apply the correct line-height", () => {
    expect(titleElement).toHaveStyle(
      `line-height: ${styles[styleName].lineHeight}`
    );
  });

  it("should apply the correct font-weight", () => {
    expect(titleElement).toHaveStyle(
      `font-weight: ${styles[styleName].weight}`
    );
  });
});
