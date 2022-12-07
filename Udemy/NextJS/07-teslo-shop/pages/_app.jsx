// Material UI
import { CssBaseline, ThemeProvider } from "@mui/material";

// SWR
import { SWRConfig } from "swr";

// Context
import { UIProvider } from "../context";
import { CartProvider } from "../context";

// Themes
import { lightTheme } from "../themes";

// Css
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <CartProvider>
        <UIProvider>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UIProvider>
      </CartProvider>
    </SWRConfig>
  );
}

export default MyApp;
