// Next
import Head from "next/head";

// Components
import { Navbar, Sidebar } from "../ui";

// Material UI
import { Box } from "@mui/material";

export const Layout = ({ title, children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />
      <Sidebar />

      <Box sx={{ padding: "10px 20px" }}>{children}</Box>
    </Box>
  );
};
