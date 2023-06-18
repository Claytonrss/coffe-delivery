import { theme } from "@styles/theme";
import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { ThemeProvider } from "styled-components";

const renderWithTheme = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options);

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithTheme as render };
