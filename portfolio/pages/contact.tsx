import { Heading } from "@chakra-ui/react";
import Head from "next/head";
import { Hero } from "../components/hero";
import { Page } from "../components/layout/page";
import { MetaTagsHead } from "../components/meta-tags-head";
import { motion } from "framer-motion";
export default function Projects() {
  const MotionHeading = motion(Heading);
  return (
    <Page>
      <header>
        <MotionHeading as="h1" fontSize="6xl">
          Wanna chat?
        </MotionHeading>
      </header>
    </Page>
  );
}
