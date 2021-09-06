import {
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Drawer as ChakraDrawer,
  useBreakpointValue,
  Link,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import { MutableRefObject } from "react";
import React from "react";
import NextLink from "next/link";

type Props = {
  finalFocusRef: MutableRefObject<null>;
  isOpen: boolean;
  onClose: () => void;
};

export const Drawer = ({ finalFocusRef, isOpen, onClose }: Props) => {
  const drawerSize = useBreakpointValue({ base: "xs", lg: "md" });

  return (
    <ChakraDrawer
      motionPreset="none"
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={finalFocusRef}
      size={drawerSize}
    >
      <DrawerOverlay bg="#ff000099" />
      <DrawerContent>
        <DrawerHeader>What do you want to know?</DrawerHeader>
        <DrawerBody as="nav">
          <VStack
            spacing={4}
            align="flex-end"
            divider={<StackDivider borderColor="red" />}
            fontFamily="heading"
            fontSize="2xl"
          >
            <NextLink href="/" passHref>
              <Link href="/" onClick={onClose}>
                About me
              </Link>
            </NextLink>

            <NextLink href="/projects" passHref>
              <Link onClick={onClose}>Projects</Link>
            </NextLink>

            <NextLink href="/contact" passHref>
              <Link onClick={onClose}>Contact</Link>
            </NextLink>

            <NextLink href="/mentorship" passHref>
              <Link onClick={onClose}>Mentorship</Link>
            </NextLink>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  );
};
