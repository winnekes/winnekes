import { Flex, HStack, Link, Text, useDisclosure } from "@chakra-ui/react";
import React, { FunctionComponent, useRef } from "react";
import { spacing } from "../../styles/theme";
import NextLink from "next/link";

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
          <NextLink href="/" passHref>
            <Link href="/">About me</Link>
          </NextLink>

          <NextLink href="/projects" passHref>
            <Link>Projects</Link>
          </NextLink>

          <NextLink href="/contact" passHref>
            <Link>Contact</Link>
          </NextLink>

          <NextLink href="/mentorship" passHref>
            <Link>Mentorship</Link>
          </NextLink>
        </HStack>
      </Flex>
    </>
  );
};
