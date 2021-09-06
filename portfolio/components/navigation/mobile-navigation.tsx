import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FunctionComponent, useRef } from "react";
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
        pb={spacing}
      >
        <HStack justify="center">
          <Box position="relative" boxSize="24px" invert="0%">
            <Image src="/apple-touch-icon.png" layout="fill" />
          </Box>
          <Text fontWeight="bold" alignSelf="center">
            winnekes
          </Text>
        </HStack>

        <IconButton
          size="lg"
          onClick={onOpen}
          icon={<BiMenu size="30px" />}
          variant="ghost"
          aria-label="Open menu"
        />
      </Flex>

      <Drawer finalFocusRef={btnRef} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
