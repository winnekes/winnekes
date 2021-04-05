import { Center, Divider, Heading, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import useTyped from "use-typed";
import { useRef } from "react";

export default function Home() {
  const demoRef = useRef(null);
  useTyped(demoRef, {
    strings: ["Simona Winnekes", "A cat lover"],
    startDelay: 1000,
    typeSpeed: 40,
    backSpeed: 40,
  });

  return (
    <div>
      <Head>
        <title>simona winnekes - from nurse to coding</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Center h="100vh" w="100vw" color="white">
        <Stack textAlign="center">
          <Heading as="h3" size="1xl" className="block-reveal">
            I am
          </Heading>
          <div className={styles.main_heading}>
            <h1 ref={demoRef}>Simona Winnekes</h1>
          </div>
          <Heading as="h3" size="1xl" className="block-reveal">
            I love cats, robots and coding
          </Heading>
          {/*<Divider />*/}
        </Stack>
      </Center>
    </div>
  );
}
