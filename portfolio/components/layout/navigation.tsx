import { Box, Container, Flex } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { maxWidth, spacing } from "../../styles/theme";
import { DesktopNavigation } from "../navigation/desktop-navigation";
import { MobileNavigation } from "../navigation/mobile-navigation";
import { PageProps } from "./page";

export const Navigation: FunctionComponent<PageProps> = ({
  background,
  isDarkMode,
}) => {
  const bg = !background && isDarkMode && "black";
  const color = isDarkMode && "white";

  return (
    <Box width="100%" py="50px" color={color} bg={bg}>
      <Container maxWidth={maxWidth}>
        <MobileNavigation />
        <DesktopNavigation />
      </Container>
    </Box>
  );
};
