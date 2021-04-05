import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "../constants/theme";
import AOS from "aos";
import { useEffect } from "react";
import "../styles/globals.css";
import "aos/dist/aos.css";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      delay: 1100,
      once: true,
    });
  }, []);
  return (
    <ChakraProvider theme={extendTheme({ ...theme })}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
