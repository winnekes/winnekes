import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { LinkItem } from "../layout/navigation-wrapper";
import { SocialIconButton } from "../media/social-icon-button";
import { Subheading } from "../text/subheading";

type Props = {
  onClose: () => void;
};

export const MobileNavigation: FunctionComponent<Props> = ({ onClose }) => {
  return (
    <VStack justify="space-between">
      <VStack as="nav" spacing={8} fontFamily="heading" fontSize="3xl">
        <LinkItem href="/" onClick={onClose}>
          About
        </LinkItem>
        <LinkItem href="https://blog.winnekes.com" isExternal onClick={onClose}>
          Blog
        </LinkItem>
        <LinkItem href="/projects" onClick={onClose}>
          Projects
        </LinkItem>
        <LinkItem href="/contact" onClick={onClose}>
          Contact
        </LinkItem>
        <LinkItem href="/mentorship" onClick={onClose}>
          Mentorship
        </LinkItem>
      </VStack>

      <Box>
        <VStack>
          <Subheading>Let's connect</Subheading>
          <Text>
            Chakra provides a set of commonly used interface icons you can use
            in your project. To use these icons, install @chakra-ui/icons,
            import the icons you need and style them.
          </Text>
        </VStack>

        <VStack>
          <Subheading>Let's connect</Subheading>
          <HStack as="nav">
            <SocialIconButton
              href="https://instagram.com/robotsandcats"
              icon={<AiFillInstagram size="42px" />}
              aria-label="Open menu"
            />
            <SocialIconButton
              href="https://instagram.com/robotsandcats"
              icon={<AiFillLinkedin size="42px" />}
              aria-label="Open menu"
            />
            <SocialIconButton
              href="https://instagram.com/robotsandcats"
              icon={<AiFillTwitterSquare size="42px" />}
              aria-label="Open menu"
            />
            <SocialIconButton
              href="https://instagram.com/robotsandcats"
              icon={<AiFillGithub size="42px" />}
              aria-label="Open menu"
            />
          </HStack>
        </VStack>
      </Box>
    </VStack>
  );
};
