import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Box, ChakraProvider, extendTheme, Progress } from "@chakra-ui/react";
import { AnimateSharedLayout, motion } from "framer-motion";
import { theme } from "../styles/theme";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/main.scss";

function App({ Component, pageProps, router }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, []);

  return (
    <ChakraProvider theme={extendTheme({ ...theme })}>
      <AnimateSharedLayout>
        <Box top="10px" zIndex={99999} position="fixed">
          <Progress
            isIndeterminate={true}
            colorScheme="purple"
            bg="brand01.500"
          />
        </Box>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </ChakraProvider>
  );
}

export default App;
