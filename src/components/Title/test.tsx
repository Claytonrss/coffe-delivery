import { theme } from "@styles/theme";
import Title from ".";
import { render } from "@tests/tests-utils";

describe("Title", () => {
  it("renders the title with the correct style", () => {
    const tag = "h1";
    const styleName = "titleXL";
    const text = "Hello, World!";

    const { getByText } = render(
      <Title tag={tag} styleName={styleName}>
        {text}
      </Title>
    );

    const titleElement = getByText(text);

    expect(titleElement.tagName.toLowerCase()).toBe(tag);
    expect(titleElement).toHaveStyle(`
      font-family: ${theme.fonts.title.fontFamily};
      font-size: ${theme.fonts.title.styles[styleName].size};
      line-height: ${theme.fonts.title.styles[styleName].lineHeight};
      font-weight: ${theme.fonts.title.styles[styleName].weight};
    `);
  });
});
