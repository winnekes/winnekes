import { Box, Container, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";
import { maxWidth, spacing } from "../../styles/theme";
import { DesktopNavigation } from "../navigation/desktop-navigation";
import { MobileNavigation } from "../navigation/mobile-navigation";
import { PageProps } from "./page";

type LinkItemProps = {
  href: string;
  isExternal?: boolean;
};

export const LinkItem: FunctionComponent<LinkItemProps> = ({
  href,
  isExternal,
  children,
}) => {
  const router = useRouter();

  return (
    <NextLink href={href} passHref>
      <Link
        fontWeight="bold"
        borderBottom={router.pathname === href && "2px solid red"}
        isExternal={isExternal}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export const Navigation: FunctionComponent<PageProps> = ({
  backgroundImage,
  isDark,
}) => {
  const bg = !backgroundImage && isDark && "black";
  const color = isDark && "white";

  return (
    <Box width="100%" my={spacing} color={color} bg={bg}>
      <Container
        maxWidth={maxWidth}
        p={spacing}
        bg={backgroundImage && (isDark ? "black" : "white")}
      >
        <MobileNavigation />
        <DesktopNavigation />
      </Container>
    </Box>
  );
};
