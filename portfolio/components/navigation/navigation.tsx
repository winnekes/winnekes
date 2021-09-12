import { IconButton, useDisclosure } from "@chakra-ui/react";
import React, { FunctionComponent, useRef } from "react";
import { BsThreeDots } from "react-icons/bs";
import { Drawer } from "./drawer";

export const Navigation: FunctionComponent = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <IconButton
        size="lg"
        onClick={onOpen}
        icon={<BsThreeDots size="42px" />}
        variant="ghost"
        aria-label="Open menu"
      />

      <Drawer finalFocusRef={btnRef} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
