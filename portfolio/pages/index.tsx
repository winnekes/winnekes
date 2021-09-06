import { Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import { Hero } from "../components/hero";
import { Page } from "../components/layout/page";
import { MetaTagsHead } from "../components/meta-tags-head";

export default function Home() {
  const MotionHeading = motion(Heading);
  return (
    <Page background="url(./stars.png)">
      <header>
        <MotionHeading as="h1" fontSize="6xl">
          Robots, cats, <br />
          all things cute,
          <br /> that is me.
        </MotionHeading>
      </header>
    </Page>
  );
}
