// Next
import NextLink from "next/link";

// Material UI
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";

export const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuOutlined />
        </IconButton>

        <NextLink href="/" passHref>
          <Typography variant="h6" color="white">
            Cookie Master
          </Typography>
        </NextLink>

        <div style={{ flex: 1 }} />

        <NextLink href="/theme-changer" passHref>
          <Typography variant="h6" color="white">
            Cambiar tema
          </Typography>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
