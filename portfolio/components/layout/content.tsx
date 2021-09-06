import { Container } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { maxWidth, spacing } from "../../styles/theme";

export const Content: FunctionComponent = ({ children }) => {
  return (
    <Container maxWidth={maxWidth} mx={spacing}>
      {children}
    </Container>
  );
};
