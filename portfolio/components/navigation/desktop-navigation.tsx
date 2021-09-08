import { Flex, HStack, Link } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import NextLink from "next/link";
import { LinkItem } from "../layout/navigation";

export const DesktopNavigation: FunctionComponent = () => {
  return (
    <>
      <Flex
        as="nav"
        display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
        align="center"
        justify="space-between"
        direction="row"
        fontSize="2xl"
      >
        <NextLink href="/" passHref>
          <Link fontWeight="bold">winnekes</Link>
        </NextLink>

        <HStack spacing={4} textTransform="uppercase">
          <LinkItem href="/">About</LinkItem>
          <LinkItem href="https://blog.winnekes.com" isExternal>
            Blog
          </LinkItem>
          <LinkItem href="/projects">Projects</LinkItem>
          <LinkItem href="/contact">Contact</LinkItem>
          <LinkItem href="/mentorship">Mentorship</LinkItem>
        </HStack>
      </Flex>
    </>
  );
};
