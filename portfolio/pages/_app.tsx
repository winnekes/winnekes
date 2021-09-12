import type { AppProps } from "next/app";
import { useEffect } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AnimateSharedLayout, motion } from "framer-motion";
import { theme } from "../styles/theme";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/main.scss";

function App({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={extendTheme({ ...theme })}>
      <AnimateSharedLayout>
        <motion.div
          key={router.route}
          initial="initial"
          animate="animate"
          variants={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimateSharedLayout>
    </ChakraProvider>
  );
}

export default App;
