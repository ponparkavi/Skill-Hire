import React from "react";
import {
  Drawer,
  Box,
  Avatar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, toggleDrawer, handleAvatar, onLogout }) => {
  const navigate = useNavigate();

  const handleSettings = () => {
    navigate("/settings");
  };
  const handleMeeting = () => {
    navigate("/meeting");
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
      <Box
        sx={{ width: 250, padding: 2 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar sx={{ width: 80, height: 80, mb: 2 }} />
          <Typography
            variant="h6"
            onClick={handleAvatar}
            sx={{ cursor: "pointer" }}
          >
            Admin
          </Typography>
          <Typography variant="body2" color="text.secondary">
            admin@example.com
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleMeeting}>
              <ListItemText primary="Meeting" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleSettings}>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={onLogout}>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
