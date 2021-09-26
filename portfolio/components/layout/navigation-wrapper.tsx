import {
  Box,
  IconButton,
  Link,
  LinkProps,
  Portal,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { FunctionComponent, useRef } from "react";
import { BsThreeDots, BsX } from "react-icons/bs";
import { navigationWidth, spacing } from "../../styles/theme";
import { Drawer } from "../navigation/drawer";
import { PageProps } from "./page";

type LinkItemProps = {
  href: string;
  isExternal?: boolean;
};

export const LinkItem: FunctionComponent<LinkItemProps & LinkProps> = ({
  href,
  isExternal,
  children,
  ...props
}) => {
  const router = useRouter();

  return (
    <NextLink href={href} passHref>
      <Link
        fontWeight="bold"
        borderBottom={router.pathname === href && "2px solid"}
        borderColor="brand01.500"
        isExternal={isExternal}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export const NavigationWrapper: FunctionComponent<PageProps> = ({
  backgroundImage,
  isDark,
}) => {
  const { isOpen, onClose, onOpen, onToggle } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Box
        bg="transparent"
        position="fixed"
        left={[spacing, null, null, "48px"]}
        top={[spacing, null, null, "48px"]}
        zIndex={100000}
      >
        <IconButton
          isRound
          boxSize="64px"
          onClick={onToggle}
          icon={isOpen ? <BsX size="48px" /> : <BsThreeDots size="48px" />}
          aria-label="Open menu"
          my={spacing}
          color={isOpen ? "white" : "#ffa9a3"}
          bg={isOpen ? "#ffa9a3" : "white"}
          boxShadow="0 2px 4px rgba(0,0,0,.2)"
        />
      </Box>
      <Drawer finalFocusRef={btnRef} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
