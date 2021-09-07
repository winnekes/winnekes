import { Box, Container, Flex } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { maxWidth, spacing } from "../../styles/theme";
import { DesktopNavigation } from "../navigation/desktop-navigation";
import { MobileNavigation } from "../navigation/mobile-navigation";
import { PageProps } from "./page";

export const Navigation: FunctionComponent<PageProps> = ({
  backgroundImage,
  isDark,
}) => {
  const bg = !backgroundImage && isDark && "black";
  const color = isDark && "white";

  return (
    <Box width="100%" py="50px" color={color} bg={bg}>
      <Container
        maxWidth={maxWidth}
        px={10}
        py="20px"
        bg={backgroundImage && (isDark ? "black" : "white")}
      >
        <MobileNavigation />
        <DesktopNavigation />
      </Container>
    </Box>
  );
};
