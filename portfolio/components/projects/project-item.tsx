import { Box, Heading, HStack, Icon, Link, Tag, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { Paragraph } from "../text/paragraph";
import { ImageCarousel, ImageCarouselProps } from "./image-carousel";

export type ProjectItemProps = {
  title: string;
  description: string | JSX.Element;
  projectUrl?: string;
  tags?: string[];
};

export const ProjectItem: FunctionComponent<
  ProjectItemProps & ImageCarouselProps
> = ({ title, description, projectUrl, tags, images }) => {
  return (
    <Box>
      <Heading as="h2" fontSize="6xl">
        {title}
      </Heading>
      <ImageCarousel images={images} />
      <Box>
        <Paragraph>{description}</Paragraph>

        {tags && (
          <HStack spacing={4} my={7}>
            {tags.map((tag) => (
              <Tag bg="gray.700" color="gray.400">
                {tag}
              </Tag>
            ))}
          </HStack>
        )}

        {projectUrl && (
          <Link href="https://sturmglas.com" isExternal>
            {projectUrl} <Icon as={BiLinkExternal} color="red" />
          </Link>
        )}
      </Box>
    </Box>
  );
};
