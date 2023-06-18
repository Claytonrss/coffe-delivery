import { TextTypes } from "@styles/theme";
import { ReactNode } from "react";

export type TextProps = {
  tag: keyof JSX.IntrinsicElements;
  styleName: TextTypes;
  children: ReactNode;
};
