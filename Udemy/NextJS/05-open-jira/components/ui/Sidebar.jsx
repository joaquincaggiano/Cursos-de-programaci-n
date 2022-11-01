// React Hook
import { useContext } from "react";

// Context
import { UIContext } from "../../context/ui";

// Material UI
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";

// Icons
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const menuItems = ["Inbox", "Starred", "Send Email", "Drafts"];

export const Sidebar = () => {

  const { sideMenuOpen, closeSideMenu } = useContext(UIContext)

  return (
    <Drawer anchor="left" open={sideMenuOpen} onClose={closeSideMenu}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menú</Typography>
        </Box>

        <List>
          {menuItems.map((item, i) => {
            return (
              <ListItem button key={item}>
                <ListItemIcon>
                  {i % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            );
          })}
        </List>

        <Divider />

        <List>
          {menuItems.map((item, i) => {
            return (
              <ListItem button key={item}>
                <ListItemIcon>
                  {i % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};
