import { Box, Center, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
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

export const DesktopNavigation: FunctionComponent<Props> = ({ onClose }) => {
  return (
    <Center h="100%">
      <SimpleGrid columns={2} spacingX="40px">
        <VStack
          as="nav"
          spacing={8}
          fontFamily="heading"
          fontSize="5xl"
          align="flex-start"
        >
          <LinkItem href="/" onClick={onClose}>
            About
          </LinkItem>
          <LinkItem
            href="https://blog.winnekes.com"
            isExternal
            onClick={onClose}
          >
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
          <VStack align="flex-end">
            <Subheading>Let's connect</Subheading>
            <HStack as="nav" alignSelf="flex-end">
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

          <VStack align="flex-end">
            <Subheading>Let's connect</Subheading>
            <HStack as="nav" alignSelf="flex-end">
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
      </SimpleGrid>
    </Center>
  );
};
