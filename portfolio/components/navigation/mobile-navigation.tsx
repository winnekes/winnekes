import { Flex, IconButton, Text, useDisclosure } from "@chakra-ui/react";
import { FunctionComponent, useRef } from "react";
import { BiMenu } from "react-icons/bi";
import { spacing } from "../../styles/theme";
import { Drawer } from "./drawer";

export const MobileNavigation: FunctionComponent = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Flex
        display={{ base: "flex", lg: "none" }}
        align="center"
        justify="space-between"
        mb={spacing}
      >
        <Text>winnekes</Text>

        <IconButton
          onClick={onOpen}
          icon={<BiMenu />}
          variant="ghost"
          aria-label="Open menu"
        />
      </Flex>

      <Drawer finalFocusRef={btnRef} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
