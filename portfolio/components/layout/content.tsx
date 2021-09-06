import { Box, Container } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { maxWidth, spacing } from "../../styles/theme";

type Props = {
  isDarkMode?: boolean;
};

export const Content: FunctionComponent<Props> = ({ isDarkMode, children }) => {
  return (
    <Box width="100vw" px={spacing} bg={isDarkMode && "black"}>
      <Container maxWidth={maxWidth}>{children}</Container>
    </Box>
  );
};
