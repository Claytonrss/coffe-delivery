import Text from "@components/Text";
import { Container } from "./styles";
import { ButtonProps } from "./types";

const Button = ({
  icon,
  variant,
  children,
  textStyle = "buttonM",
}: ButtonProps) => {
  return (
    <Container variant={variant}>
      {icon && <>{icon}</>}
      {children && (
        <Text styleName={textStyle} tag="span">
          {children}
        </Text>
      )}
    </Container>
  );
};

export default Button;
