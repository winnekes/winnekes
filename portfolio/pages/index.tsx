import { Center, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";

import { Hero } from "../components/hero";
import { About } from "../components/about";

export default function Home() {
  return (
    <div>
      <Head>
        <title>simona winnekes - from nurse to coding</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      {/*<About />*/}
    </div>
  );
}
