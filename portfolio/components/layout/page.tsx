import { VStack, Container } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { maxWidth, spacing } from "../../styles/theme";
import { Content } from "./content";
import { Navigation } from "./navigation";

type Props = {
  isDarkMode?: boolean;
};
export const Page: FunctionComponent<Props> = ({ isDarkMode, children }) => {
  return (
    <VStack spacing={0}>
      <Navigation isDarkMode={isDarkMode} />
      <Content isDarkMode={isDarkMode}>{children}</Content>
    </VStack>
  );
};
