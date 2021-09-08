import { Heading } from "@chakra-ui/react";
import { Page } from "../components/layout/page";
import { motion } from "framer-motion";

export default function Projects() {
  const MotionHeading = motion(Heading);
  return (
    <Page>
      <header>
        <MotionHeading as="h1" fontSize="6xl">
          Robots, cats, <br />
          all things cute,
          <br /> that is me.
        </MotionHeading>
        dddddddddddddddddddddddddd
      </header>
    </Page>
  );
}
