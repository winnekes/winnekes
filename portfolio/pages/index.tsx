import { Box, Center, Heading, Stack } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>simona winnekes - from nurse to coding</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Center h="100vh" w="100vw" color="white">
        <Stack textAlign="center">
          <Heading as="h3" textTransform="uppercase">
            I am
          </Heading>
          <Heading as="h1">Simona Winnekes</Heading>
          <Heading as="h3" textTransform="uppercase">
            I love cats, robots and coding
          </Heading>
        </Stack>
      </Center>
    </div>
  );
}
