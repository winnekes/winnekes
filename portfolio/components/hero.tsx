import {
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import useTyped from "use-typed";

export function Hero() {
  const demoRef = useRef(null);

  useTyped(demoRef, {
    strings: [
      "^1000 allergic to bees",
      "building a robot",
      "in love with TypeScript",
      "Simona Winnekes",
    ],
    startDelay: 2000,
    typeSpeed: 45,
    backSpeed: 40,
  });

  return (
    <Center
      p={2}
      h="100vh"
      w="100vw"
      color="white"
      backgroundImage="url('/images/background_galaxy_swirl.png')"
      backgroundSize="cover"
      backgroundPosition="bottom"
    >
      <Flex
        direction="column"
        textAlign="center"
        justifyContent="center"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="1000"
        data-aos-offset="0"
      >
        <Heading as="h3" size="1xl">
          I am
        </Heading>

        <div className="main-heading">
          <h1 ref={demoRef}>a developer</h1>
        </div>

        <VStack pt="4em">
          <HStack p={6} spacing={1}>
            <a
              href="https://linkedin.com/in/winnekes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://instagram.com/robotsandcats"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"
                alt="Instagram"
              />
            </a>
            <a href="mailto:simona.winnekes@googlemail.com">
              <img
                src="https://img.shields.io/badge/Mail-D14836?style=for-the-badge&logo=gmail&logoColor=white"
                alt="Mail me"
              />
            </a>
          </HStack>

          <HStack p={6} spacing={1}>
            <a
              href="https://blog.winnekes.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/badge/Medium-white?style=for-the-badge&logo=medium&logoColor=black"
                alt="Medium"
              />
            </a>
            <a
              href="https://winnekes.hashnode.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/badge/Hashnode-3879FF?style=for-the-badge&logo=hashnode&logoColor=white"
                alt="Instagram"
              />
            </a>
          </HStack>
        </VStack>
      </Flex>
    </Center>
  );
}
