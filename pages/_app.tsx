import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material";
import Head from "next/head";

const theme = createTheme({
  shape: {
    borderRadius: 5,
  },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1300, xl: 2000 },
  },
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Moving Out</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
