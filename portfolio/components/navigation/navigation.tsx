import { Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import React, { FunctionComponent, useRef } from "react";
import { BsThreeDots } from "react-icons/bs";
import { spacing } from "../../styles/theme";
import { Drawer } from "./drawer";

export const Navigation: FunctionComponent = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <Flex direction={["row-reverse", null, null, "column"]} color="white">
      <IconButton
        size="lg"
        onClick={onOpen}
        icon={<BsThreeDots size="42px" />}
        variant="ghost"
        aria-label="Open menu"
        m={spacing}
      />

      <Drawer finalFocusRef={btnRef} isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};
