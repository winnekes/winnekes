import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { theme } from "../constants/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={extendTheme({ ...theme })}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
