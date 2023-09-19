// import styled from "@emotion/styled";
// import {
//   AppBar,
//   Badge,
//   Box,
//   IconButton,
//   Toolbar,
//   Typography,
// } from "@mui/material";
// import React from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import logo from "../assets/icon.jpeg";
// import SettingsIcon from "@mui/icons-material/Settings";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import LogoutIcon from "@mui/icons-material/Logout";

// const StyledAppBar = styled(AppBar)`
//   bgcolor: "neutral.main";
// `;

// export default function AppHeader() {
//   return (
//     <StyledAppBar position="static">
//       <Toolbar>
//         <IconButton onClick={() => console.log("clicked")} color="secondary">
//           <MenuIcon></MenuIcon>
//         </IconButton>
//         {/* <Box sx={styles.} /> */}
//         <Box component={"img"} sx={styles.appLogo} src={logo} />
//         <Box sx={{ flexGrow: 1 }} />
//         <IconButton title="Notifications" color="secondary">
//           <Badge badgeContent={21} color="error">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <IconButton title="Settings" color="secondary">
//           <SettingsIcon />
//         </IconButton>
//         <IconButton title="Sign Out" color="secondary">
//           <LogoutIcon />
//         </IconButton>
//       </Toolbar>
//     </StyledAppBar>
//   );
// }

// const styles = {
//   appLogo: {
//     borderRadius: 2,
//     width: 90,
//     marginLeft: 2,
//     cursor: "pointer",
//     marginLeft: 40,
//   },
// };
// // AppHeader.js
// import React, { useState } from "react";
// import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import logo from "../assets/icon.jpeg";
// import SettingsIcon from "@mui/icons-material/Settings";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import LogoutIcon from "@mui/icons-material/Logout";
// import styled from "@emotion/styled";
// import Sidenav from "./Sidenav";

// const StyledAppBar = styled(AppBar)`
//   background-color: "neutral.main";
// `;

// export default function AppHeader() {
//   const [isSideNavOpen, setIsSideNavOpen] = useState(false);

//   const toggleSideNav = () => {
//     setIsSideNavOpen(!isSideNavOpen);
//   };

//   return (
//     <div>
//       <StyledAppBar position="static">
//         <Toolbar>
//           <IconButton onClick={toggleSideNav} color="secondary">
//             <MenuIcon />
//           </IconButton>
//           <Box component={"img"} sx={styles.appLogo} src={logo} />
//           <Box sx={{ flexGrow: 1 }} />
//           <IconButton title="Notifications" color="secondary">
//             <Badge badgeContent={21} color="error">
//               <NotificationsIcon />
//             </Badge>
//           </IconButton>
//           <IconButton title="Settings" color="secondary">
//             <SettingsIcon />
//           </IconButton>
//           <IconButton title="Sign Out" color="secondary">
//             <LogoutIcon />
//           </IconButton>
//         </Toolbar>
//       </StyledAppBar>

//       {/* Render the side navigation component conditionally based on the state */}
//       <Sidenav isOpen={isSideNavOpen} />
//     </div>
//   );
// }

// const styles = {
//   appLogo: {
//     borderRadius: 2,
//     width: 90,
//     marginLeft: 2,
//     cursor: "pointer",
//     marginLeft: 40,
//   },
// };

import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useProSidebar } from "react-pro-sidebar";

function AppHeader() {
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();

  return (
    <AppBar position="sticky" sx={styles.appBar}>
      <Toolbar>
        <IconButton
          onClick={() => (broken ? toggleSidebar() : collapseSidebar())}
          color="secondary"
        >
          <MenuIcon />
        </IconButton>
        <Box
          component={"img"}
          sx={styles.appLogo}
          src="/src/assets/sample-logo.png"
        />
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
    </AppBar>
  );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  appBar: {
    bgcolor: "neutral.main",
  },
  appLogo: {
    borderRadius: 2,
    width: 80,
    marginLeft: 2,
    cursor: "pointer",
  },
};

export default AppHeader;
