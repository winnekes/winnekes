import { Flex, HStack, Link, Text, useDisclosure } from "@chakra-ui/react";
import { FunctionComponent, useRef } from "react";
import { spacing } from "../../styles/theme";

export const DesktopNavigation: FunctionComponent = () => {
  return (
    <>
      <Flex
        as="nav"
        display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
        align="center"
        justify="space-between"
        direction="row"
        mb={spacing}
      >
        <Text>winnekes</Text>

        <HStack spacing={4} textTransform="uppercase">
          <Link>About me</Link>

          <Link>Projects</Link>

          <Link>Contact</Link>

          <Link>Mentorship</Link>
        </HStack>
      </Flex>
    </>
  );
};
