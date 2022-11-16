// React
import { useEffect, useState } from "react";

// Components
import { Layout } from "../components/layouts";

// Cookies
import Cookies from "js-cookie";

// Axios
import axios from "axios";

// Material UI
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const ThemeChangerPage = ({ theme }) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const onThemeChange = (e) => {
    const selectedTheme = e.target.value;
    setCurrentTheme(selectedTheme);
    Cookies.set("theme", selectedTheme);
  };

  const onClick = async () => {
    const { data } = await axios.get("/api/hello");
    console.log({ data });
  };

  useEffect(() => {
    console.log("Cookies:", Cookies.get("theme"));
  }, []);

  return (
    <Layout title="Theme Changer">
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup value={currentTheme} onChange={onThemeChange}>
              <FormControlLabel value="dark" control={<Radio />} label="Dark" />
              <FormControlLabel
                value="custom"
                control={<Radio />}
                label="Custom"
              />
            </RadioGroup>
          </FormControl>

          <Button onClick={onClick}>Solicitud</Button>
        </CardContent>
      </Card>
    </Layout>
  );
};

export const getServerSideProps = async ({ req }) => {
  const { theme = "dark" } = req.cookies;

  const validThemes = ["dark", "custom"];

  return {
    props: {
      theme: validThemes.includes(theme) ? theme : "dark",
    },
  };
};

export default ThemeChangerPage;
