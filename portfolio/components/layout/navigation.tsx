import { Box, Container, Flex } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { maxWidth, spacing } from "../../styles/theme";
import { DesktopNavigation } from "../navigation/desktop-navigation";
import { MobileNavigation } from "../navigation/mobile-navigation";

type Props = {
  isDarkMode?: boolean;
};

export const Navigation: FunctionComponent<Props> = ({ isDarkMode }) => {
  return (
    <Box
      width="100%"
      py="50px"
      color={isDarkMode && "white"}
      bg={isDarkMode && "black"}
    >
      <Container maxWidth={maxWidth}>
        <MobileNavigation />
        <DesktopNavigation />
      </Container>
    </Box>
  );
};
