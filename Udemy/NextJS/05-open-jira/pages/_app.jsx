// Providers
import { UIProvider } from "../context/ui";
import { EntriesProvider } from "../context/entries";

// Css
import "../styles/globals.css";

// Material UI
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "../themes";

function MyApp({ Component, pageProps }) {
  return (
    <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
  );
}

export default MyApp;
