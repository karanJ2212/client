import styled from "@emotion/styled";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/icon.jpeg";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";

const StyledAppBar = styled(AppBar)`
  bgcolor: "neutral.main";
`;

export default function AppHeader() {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <IconButton onClick={() => console.log("clicked")} color="secondary">
          <MenuIcon></MenuIcon>
        </IconButton>
        {/* <Box sx={styles.} /> */}
        <Box component={"img"} sx={styles.appLogo} src={logo} />
        <Box sx={{ flexGrow: 1 }} />
        <IconButton title="Notifications" color="secondary">
          <Badge badgeContent={21} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton title="Settings" color="secondary">
          <SettingsIcon />
        </IconButton>
        <IconButton title="Sign Out" color="secondary">
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </StyledAppBar>
  );
}

const styles = {
  appLogo: {
    borderRadius: 2,
    width: 90,
    marginLeft: 2,
    cursor: "pointer",
    marginLeft: 40,
  },
};
