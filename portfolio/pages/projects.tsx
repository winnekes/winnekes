import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Page } from "../components/layout/page";
import {
  ProjectItem,
  ProjectItemProps,
} from "../components/projects/project-item";
import { ImageCarouselProps } from "../components/projects/image-carousel";

export const projects: Array<ProjectItemProps & ImageCarouselProps> = [
  {
    title: "Portfolio",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum maysbe used as a placeholder before final copy is available.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1109&q=80",
        alt: "",
      },
      {
        url: "https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
        alt: "",
      },
    ],
    tags: ["Next.js", "Test"],
    projectUrl: "https://sturmglas.com",
  },
  {
    title: "sturmglas",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum maysbe used as a placeholder before final copy is available.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1109&q=80",
        alt: "",
      },
      {
        url: "https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
        alt: "",
      },
    ],
    tags: ["Next.js", "Test"],
    projectUrl: "https://sturmglas.com",
  },
  {
    title: "SimplyShift",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum maysbe used as a placeholder before final copy is available.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1109&q=80",
        alt: "",
      },
      {
        url: "https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
        alt: "",
      },
    ],
    tags: ["Next.js", "Test"],
    projectUrl: "https://sturmglas.com",
  },

  {
    title: "tinyhive.dev",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum maysbe used as a placeholder before final copy is available.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1109&q=80",
        alt: "",
      },
      {
        url: "https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
        alt: "",
      },
    ],
    tags: ["Next.js", "Test"],
    projectUrl: "https://sturmglas.com",
  },
  {
    title: "ITypeScript",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum maysbe used as a placeholder before final copy is available.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1109&q=80",
        alt: "",
      },
      {
        url: "https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
        alt: "",
      },
    ],
    tags: ["Next.js", "Test"],
    projectUrl: "https://sturmglas.com",
  },
];

export default function Projects() {
  return (
    <Page isDark>
      <Box as="header" mb="100px">
        <Heading as="h1" fontSize="6xl">
          Projects
        </Heading>
        <Text fontSize="xl">Work that I'm very proud of</Text>
      </Box>
      <SimpleGrid columns={[1, null, null, 2]} spacing={10}>
        {projects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </SimpleGrid>
    </Page>
  );
}
