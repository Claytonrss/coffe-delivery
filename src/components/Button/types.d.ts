import { ButtonHTMLAttributes } from "react";
import { TextTypes } from "@styles/theme";
import { IconProps } from "@phosphor-icons/react";

type ButtonVariants = "primary" | "secondary" | "icon";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariants;
  icon?: IconProps;
  textStyle?: TextTypes;
};
