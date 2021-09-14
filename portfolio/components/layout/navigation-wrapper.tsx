import {
  Box,
  Container,
  Flex,
  Link,
  LinkProps,
  useBreakpointValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";
import { navigationWidth, spacing } from "../../styles/theme";
import { Navigation } from "../navigation/navigation";
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
        borderBottom={router.pathname === href && "2px solid red"}
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
  const bg = !backgroundImage && isDark ? "black" : "white";
  const color = isDark && "white";
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Box
      color={color}
      bg="red"
      position="fixed"
      width={isMobile ? "full" : navigationWidth}
      height={isMobile ? navigationWidth : "100vh"}
      zIndex={100}
    >
      <Flex
        align="center"
        justifyContent={isMobile ? "flex-end" : "center"}
        bg={backgroundImage && (isDark ? "black" : "white")}
        height={isMobile ? navigationWidth : "100vh"}
      >
        <Navigation />
      </Flex>
    </Box>
  );
};
