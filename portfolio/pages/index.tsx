import { Center, Flex, Heading, Icon, Stack } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import useTyped from "use-typed";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function Home() {
  const demoRef = useRef(null);
  useTyped(demoRef, {
    strings: ["^1000 allergic to bees", "building a robot", "Simona Winnekes"],
    startDelay: 2000,
    typeSpeed: 45,
    backSpeed: 40,
    // loop: true,
  });

  return (
    <div>
      <Head>
        <title>simona winnekes - from nurse to coding</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Center h="100vh" w="100vw" color="white">
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

          <motion.div className="main-heading" layoutId="title">
            <h1 ref={demoRef}>a developer</h1>
          </motion.div>

          <Center pt="4em">
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ ease: "linear", duration: 2, repeat: Infinity }}
            >
              <Link href="/about">
                <Icon as={FaChevronDown} boxSize="2em" />
              </Link>
            </motion.div>
          </Center>
        </Flex>
      </Center>
    </div>
  );
}
