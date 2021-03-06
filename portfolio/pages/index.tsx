import Head from "next/head";
import { Hero } from "../components/hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          simona winnekes - from scrubs to pyjamas; a typescript developer and
          robot enthusiast
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="from scrubs to pyjamas - a simple portfolio of a web developer in love with node.js and typescript. and robots."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Hero />
    </div>
  );
}
