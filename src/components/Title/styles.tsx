import styled, { css } from "styled-components";
import { ThemeFontProps } from "./types";

export const Container = styled.div<{
  styleName: ThemeFontProps;
}>`
  ${({ theme, styleName }) => {
    const { fontFamily, styles } = theme.fonts.title;
    const { size, lineHeight, weight } = styles[styleName];
    return css`
      font-family: ${fontFamily};
      font-size: ${size};
      line-height: ${lineHeight};
      font-weight: ${weight};
    `;
  }}
`;
