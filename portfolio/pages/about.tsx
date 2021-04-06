import Head from "next/head";
import { motion } from "framer-motion";
import { Box, Center } from "@chakra-ui/react";

export default function About() {
  return (
    <div>
      <Head>
        <title>simona winnekes - from nurse to coding</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Box
        data-aos="fade-up"
        h="50vh"
        w="100vw"
        color="white"
        bg="black"
        opacity="0.5"
        position="fixed"
        bottom={50}
      >
        <motion.div className="main-heading" layoutId="title">
          <h1>Simona Winnekes</h1>
        </motion.div>
      </Box>
    </div>
  );
}
