import { Heading, Flex, Text, Box, Icon, IconProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Page } from "../components/layout/page";

export default function Home() {
  const MotionHeading = motion(Heading);

  return (
    <Page backgroundImage="url(./background_space.png)">
      <Box as="header" bg="white">
        <MotionHeading as="h1" fontSize="6xl">
          <Text>Robots, cats, all things cute, that is me.</Text>
        </MotionHeading>
      </Box>
    </Page>
  );
}
