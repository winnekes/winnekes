import { Heading } from "@chakra-ui/react";
import Head from "next/head";
import { Hero } from "../components/hero";
import { Page } from "../components/layout/page";
import { MetaTagsHead } from "../components/meta-tags-head";

export default function Home() {
  return (
    <Page>
      <header>
        <Heading as="h1" fontSize="6xl">
          Robots, cats, <br />
          all things cute,
          <br /> that is me.
        </Heading>
      </header>
    </Page>
  );
}
