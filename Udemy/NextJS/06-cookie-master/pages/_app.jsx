// React
import { useEffect, useState } from "react";

// Material UI
import { CssBaseline, ThemeProvider } from "@mui/material";

// // Css Global
// import "../styles/globals.css";

// Cookies
import Cookies from "js-cookie";

// Themes
import { darkTheme, customTheme } from "../themes";

function MyApp({ Component, pageProps }) {
  const [currentTheme, setcurrentTheme] = useState(darkTheme);

  useEffect(() => {
    const cookieTheme = Cookies.get("theme") || "dark";

    const selectedTheme = cookieTheme === "dark" ? darkTheme : customTheme;

    setcurrentTheme(selectedTheme);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// MyApp.getInitialProps = async (appContext) => {
//   const { theme } = appContext.ctx.req
//     ? appContext.ctx.req.cookies
//     : { theme: "dark" };

//   const validThemes = ["dark", "custom"];

//   return { theme: validThemes.includes(theme) ? theme : "dark" };
// };

export default MyApp;
