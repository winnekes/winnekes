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
    <Box width="100%" minH="100vh" px={spacing} color={color} bg={bg}>
      <Container maxWidth={maxWidth}>{children}</Container>
    </Box>
  );
};
