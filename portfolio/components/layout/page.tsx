import { VStack, Container } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { maxWidth, spacing } from "../../styles/theme";
import { Content } from "./content";
import { Navigation } from "./navigation";

export const Page: FunctionComponent = ({ children }) => {
  return (
    <VStack pt="50px">
      <Navigation />
      <Content>{children}</Content>
    </VStack>
  );
};
