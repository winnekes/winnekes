import { Box, chakra, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Page } from "../components/layout/page";
import { motion } from "framer-motion";
import NextImage from "next/image";
import { ImageCarousel } from "../components/projects/imageCarousel";

export default function Projects() {
  const MotionHeading = motion(Heading);

  const ProjectImage = chakra(NextImage, {
    baseStyle: { position: "relative" },
    shouldForwardProp: (prop) =>
      [
        "width",
        "height",
        "src",
        "alt",
        "quality",
        "layout",
        "objectFit",
      ].includes(prop),
  });

  return (
    <Page>
      <Box as="header" mb="100px">
        <Heading as="h1" fontSize="6xl">
          Projects
        </Heading>
        <Text fontSize="xl">Work that I'm very proud of</Text>
      </Box>
      <SimpleGrid columns={[1, null, null, 2]} spacing={2}>
        <Box>
          <Heading as="h1" fontSize="6xl">
            SimplyShift
          </Heading>
          <ImageCarousel
            images={[
              {
                url: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1109&q=80",
                alt: "",
              },
              {
                url: "https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
                alt: "",
              },
            ]}
          />
          <Box as="header">
            <Text fontSize="xl">Work that I'm very proud of</Text>
          </Box>
        </Box>
      </SimpleGrid>
    </Page>
  );
}
