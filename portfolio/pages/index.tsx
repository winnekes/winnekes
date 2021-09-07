import { Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Page } from "../components/layout/page";

// background="url(./stars.png)"
export default function Home() {
  const MotionHeading = motion(Heading);
  return (
    <Page>
      <header style={{ margin: 0 }}>
        <MotionHeading as="h1" fontSize="6xl" m={0}>
          <Text bg="white" display="inline">
            Robots, cats, all things cute, that is me.
          </Text>
        </MotionHeading>
      </header>
    </Page>
  );
}
