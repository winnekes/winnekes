import { Heading, Box } from "@chakra-ui/react";
import { Page } from "../components/layout/page";
import { motion } from "framer-motion";
import NextImage from "next/image";

export default function Projects() {
  const MotionHeading = motion(Heading);
  return (
    <Page>
      <NextImage
        src="/lights.svg"
        layout="responsive"
        objectFit="cover"
        width={7}
        height={3.9}
        alt="Jewels hanging"
        priority
      />

      <header>
        <MotionHeading as="h1" fontSize="6xl">
          Get in Touch
        </MotionHeading>
      </header>
    </Page>
  );
}
