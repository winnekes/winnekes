import { Box, Container, useBreakpointValue } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { navigationWidth, spacing } from "../../styles/theme";
import { PageProps } from "./page";

export const ContentWrapper: FunctionComponent<PageProps> = ({
  isDark,
  backgroundImage,
  children,
}) => {
  const bg = !backgroundImage && isDark && "black";
  const color = isDark && "white";
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Box py={spacing} color={color} bg={bg} w="full">
      <Container
        pl={!isMobile && navigationWidth}
        maxWidth={isMobile ? "full" : `calc(100% - ${navigationWidth})`}
        bg={backgroundImage && (isDark ? "black" : "white")}
        margin={
          isMobile ? `${navigationWidth} 0 0 0` : `0 0 0 ${navigationWidth}`
        }
      >
        {children}
      </Container>
    </Box>
  );
};
