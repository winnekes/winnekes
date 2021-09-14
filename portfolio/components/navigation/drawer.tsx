import {
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Drawer as ChakraDrawer,
  useBreakpointValue,
  DrawerCloseButton,
  Center,
} from "@chakra-ui/react";
import { FunctionComponent, MutableRefObject } from "react";
import React from "react";
import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";

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
  const isMobile = useBreakpointValue({ base: true, lg: false });
  return (
    <ChakraDrawer
      motionPreset="slideInRight"
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={finalFocusRef}
      size="full"
    >
      <DrawerOverlay bg="#0000ff99" />

      <DrawerContent
        bg="url(./dust.jpg) black"
        color="white"
        //borderRadius="30% 0 0 30% / 30% 0 0 70%"
        //   animation="morph-border 20s infinite"
      >
        <DrawerCloseButton size="lg" />
        <DrawerBody as={Center}>
          {isMobile ? (
            <MobileNavigation onClose={onClose} />
          ) : (
            <DesktopNavigation onClose={onClose} />
          )}
        </DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  );
};
