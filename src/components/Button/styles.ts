import styled from "styled-components";
import { ButtonProps } from "./types";

export const Container = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;

  ${({ variant, theme }) =>
    variant === "primary" &&
    `
    padding: 12px 8px;
    min-width: 132px;
    background-color: ${theme.colors.yellow};
    color: ${theme.colors.white};
    

    &:hover {
      background-color: ${theme.colors.yellowDark};
    }
  `}

  ${({ variant, theme }) =>
    variant === "secondary" &&
    `
    padding: 6.5px 8px;
    background-color: ${theme.colors.baseButton};
    color: ${theme.colors.baseText};
    gap: 4px;
    
    svg {
      width: 16px;
      height: 16px;
      path {
        fill: ${theme.colors.purpleDark};
      }
    }


    &:hover {
      background-color: ${theme.colors.baseHover};
      color: ${theme.colors.baseSubtitle};
    }
  `}

  ${({ variant, theme }) =>
    variant === "icon" &&
    `
    padding: 8px;
    background-color: ${theme.colors.purpleDark};
    width: 38px;
    height: 38px;

    svg {
      width: 22px;
      height: 22px;
      path {
        fill: ${theme.colors.white};
      }
    }


    &:hover {
      background-color: ${theme.colors.purple};
    }
  `}
`;
