import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";

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
