import { Center, Heading, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>simona winnekes - from nurse to coding</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Center h="100vh" w="100vw" color="white">
        <Stack textAlign="center" data-aos="fade-up" data-aos-duration="3000">
          <Heading as="h3" size="1xl">
            I am
          </Heading>
          <h1 className={styles.main_heading}>Simona Winnekes</h1>
          <Heading as="h3" size="1xl">
            I love cats, robots and coding
          </Heading>
        </Stack>
      </Center>
    </div>
  );
}
