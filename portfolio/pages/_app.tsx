import type { AppProps } from "next/app";
import AOS from "aos";
import { Head } from "next/document";
import { useEffect } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AnimateSharedLayout, motion } from "framer-motion";
import { theme } from "../styles/theme";
import "../styles/main.scss";
import "aos/dist/aos.css";

function App({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      delay: 3000,
      once: true,
    });
  }, []);

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
