import { Container, Flex } from "@chakra-ui/react";
import { maxWidth, spacing } from "../../styles/theme";
import { DesktopNavigation } from "../navigation/desktop-navigation";
import { MobileNavigation } from "../navigation/mobile-navigation";

export const Navigation = () => {
  return (
    <Container maxWidth={maxWidth} mx={spacing}>
      <MobileNavigation />
      <DesktopNavigation />
    </Container>
  );
};
