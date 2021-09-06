import { VStack, Container } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { maxWidth, spacing } from "../../styles/theme";
import { Content } from "./content";
import { Navigation } from "./navigation";

export type PageProps = {
  isDarkMode?: boolean;
  background?: string;
};

export const Page: FunctionComponent<PageProps> = ({ children, ...props }) => {
  return (
    <VStack spacing={0} background={props.background}>
      <Navigation {...props} />
      <Content {...props}>{children}</Content>
    </VStack>
  );
};
