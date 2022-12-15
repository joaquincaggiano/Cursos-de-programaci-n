// Material UI
import { CssBaseline, ThemeProvider } from "@mui/material";

// SWR
import { SWRConfig } from "swr";

// Context
import { UIProvider, CartProvider, AuthProvider } from "../context";

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
      <AuthProvider>
        <CartProvider>
          <UIProvider>
            <ThemeProvider theme={lightTheme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </UIProvider>
        </CartProvider>
      </AuthProvider>
    </SWRConfig>
  );
}

export default MyApp;
