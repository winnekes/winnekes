import { Box, Container } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { maxWidth, spacing } from "../../styles/theme";
import { PageProps } from "./page";

export const Content: FunctionComponent<PageProps> = ({
  isDarkMode,
  background,
  children,
}) => {
  const bg = !background && isDarkMode && "black";
  const color = isDarkMode && "white";

  return (
    <Box width="100%" minH="100vh" py={spacing} color={color} bg={bg}>
      <Container maxWidth={maxWidth} px={10}>
        {children}
      </Container>
    </Box>
  );
};
