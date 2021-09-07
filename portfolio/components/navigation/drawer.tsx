import {
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Drawer as ChakraDrawer,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { FunctionComponent, MutableRefObject } from "react";
import React from "react";
import { LinkItem } from "./navigation";

type DrawerProps = {
  finalFocusRef: MutableRefObject<null>;
  isOpen: boolean;
  onClose: () => void;
};

export const Drawer: FunctionComponent<DrawerProps> = ({
  finalFocusRef,
  isOpen,
  onClose,
}) => {
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
        <DrawerBody as="nav" mt="100px">
          <VStack
            spacing={8}
            align="flex-end"
            fontFamily="heading"
            fontSize="3xl"
          >
            <LinkItem href="/">About</LinkItem>
            <LinkItem href="https://blog.winnekes.com" isExternal>
              Blog
            </LinkItem>
            <LinkItem href="/projects">Projects</LinkItem>
            <LinkItem href="/contact">Contact</LinkItem>
            <LinkItem href="/mentorship">Mentorship</LinkItem>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  );
};
