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
    <Box py={spacing} pt="70px" color={color} bg={bg} w="full">
      <Container
        maxWidth="full"
        padding={[spacing, null, null, "48px"]}
        bg={backgroundImage && (isDark ? "black" : "white")}
      >
        {children}
      </Container>
    </Box>
  );
};
