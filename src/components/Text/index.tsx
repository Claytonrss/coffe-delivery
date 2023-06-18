import { Container } from "./styles";
import { TextProps } from "./types";

const Text = ({ tag, styleName, children }: TextProps) => {
  return (
    <Container as={tag} styleName={styleName}>
      {children}
    </Container>
  );
};
export default Text;
