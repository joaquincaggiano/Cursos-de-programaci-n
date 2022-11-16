// Material UI
import { CssBaseline, ThemeProvider } from '@mui/material'

// Themes
import { lightTheme } from '../themes'

// Css
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
