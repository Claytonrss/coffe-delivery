import Button from "@components/Button";
import Text from "@components/Text";
import Title from "@components/Title";
import { ShoppingCartSimple, Trash } from "@phosphor-icons/react";
import { Container } from "./styles";

const HomePage = () => {
  return (
    <Container>
      <Title styleName="titleL" tag="h1">
        Home
      </Title>
      <Text styleName="textL" tag="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
      <Button variant="primary" textStyle="buttonG">
        LABEL
      </Button>

      <Button variant="secondary" icon={<Trash weight="bold" />}>
        REMOVER
      </Button>
      <Button variant="icon" icon={<ShoppingCartSimple weight="fill" />} />
    </Container>
  );
};

export default HomePage;
