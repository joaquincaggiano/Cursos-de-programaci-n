// Next
import NextLink from "next/link";

// React Hook
import { useContext } from "react";

// Context
import { UIContext } from "../../context/ui";

// Material UI
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import Link from "@mui/material";

export const Navbar = () => {
  const { openSideMenu } = useContext(UIContext);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSideMenu}>
          <MenuOutlinedIcon />
        </IconButton>
        <NextLink href={"/"} passHref style={{textDecoration:"none", color: "white"}}>
          {/* <Link underline="none" color="white"> */}
            <Typography variant="h6">OpenJira</Typography>
          {/* </Link> */}
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
