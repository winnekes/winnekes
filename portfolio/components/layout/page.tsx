import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { ContentWrapper } from "./content-wrapper";
import { NavigationWrapper } from "./navigation-wrapper";

export type PageProps = {
  isDark?: boolean;
  backgroundImage?: string;
};

export const Page: FunctionComponent<PageProps> = ({ children, ...props }) => {
  return (
    <Box background={props.backgroundImage}>
      <NavigationWrapper {...props} />
      <ContentWrapper {...props}>{children}</ContentWrapper>
    </Box>
  );
};
