import { theme } from "@styles/theme";

type CustomTheme = typeof theme;
type ThemeFontProps = keyof CustomTheme["fonts"]["title"]["styles"];

export type TitleProps = {
  tag: keyof JSX.IntrinsicElements;
  styleName: ThemeFontProps;
  children: React.ReactNode;
};
