import { Container } from "./styles";
import { TitleProps } from "./types";

const Title = ({ tag, styleName, children }: TitleProps) => {
  return (
    <Container as={tag} styleName={styleName}>
      {children}
    </Container>
  );
};
export default Title;
