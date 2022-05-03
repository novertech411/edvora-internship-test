import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    black: " #101010",
    bg: "#292929",
    white: "#FFFFFF ",
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
