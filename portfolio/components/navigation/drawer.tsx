import {
  Stack,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Drawer as ChakraDrawer,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MutableRefObject } from "react";
import React from "react";

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
        <DrawerHeader></DrawerHeader>
        <DrawerBody>
          <Stack p={4} spacing={7}></Stack>
        </DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  );
};
