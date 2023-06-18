import styled, { css } from "styled-components";
import { TextTypes } from "@styles/theme";

export const Container = styled.div<{
  styleName: TextTypes;
}>`
  ${({ theme, styleName }) => {
    const { fontFamily, styles } = theme.fonts.text;
    const { size, lineHeight, weight } = styles[styleName];
    return css`
      font-family: ${fontFamily};
      font-size: ${size};
      line-height: ${lineHeight};
      font-weight: ${weight};
    `;
  }}
`;
