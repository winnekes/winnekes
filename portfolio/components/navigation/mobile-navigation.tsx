import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { FunctionComponent, useRef } from "react";
import { BiMenu } from "react-icons/bi";
import { spacing } from "../../styles/theme";
import { Drawer } from "./drawer";
import Image from "next/image";

export const MobileNavigation: FunctionComponent = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Flex
        display={{ base: "flex", lg: "none" }}
        justify="space-between"
        align="center"
      >
        <NextLink href="/" passHref>
          <Link fontWeight="bold">winnekes</Link>
        </NextLink>

        <IconButton
          size="lg"
          onClick={onOpen}
          icon={<BiMenu size="30px" />}
          variant="ghost"
          aria-label="Open menu"
          right="-15px"
        />
      </Flex>

      <Drawer finalFocusRef={btnRef} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
