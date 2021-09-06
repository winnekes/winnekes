import { Heading } from "@chakra-ui/react";
import Head from "next/head";
import { Hero } from "../components/hero";
import { Page } from "../components/layout/page";
import { MetaTagsHead } from "../components/meta-tags-head";
import { motion } from "framer-motion";
export default function Projects() {
  const MotionHeading = motion(Heading);
  return (
    <Page isDarkMode>
      <header>
        <MotionHeading
          as="h1"
          fontSize="6xl"
          layoutId="test"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          Robots, cats, <br />
          all things cute,
          <br /> that is me.
        </MotionHeading>
        dddddddddddddddddddddddddd
      </header>
    </Page>
  );
}
