// import { useTheme } from "@mui/material";
// import React from "react";
// import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
// import { Link } from "react-router-dom";

// export default function Sidenav() {
//   const theme = useTheme();
//   // const [isExpanded, setIsExpanded] = React.useState(true);
//   return (
//     <Sidebar
//       style={{ height: "100%", top: "auto" }}
//       breakPoint="md"
//       backgroundColor={theme.palette.neutral.light}
//       Collapsed={true}
//     >
//       <Menu>
//         <MenuItem>
//           <Link to="/documentation">Documentation</Link>
//         </MenuItem>
//         <MenuItem>
//           <Link to="/AddUser">Add User</Link>
//         </MenuItem>
//         <MenuItem>
//           <Link to="/AllUser">All User</Link>
//         </MenuItem>
//       </Menu>
//     </Sidebar>
//   );
// }
// Sidenav.js
// import React from "react";
// import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
// import { Link } from "react-router-dom";
// import { useTheme } from "@mui/material";

// export default function Sidenav({ isOpen }) {
//   const theme = useTheme();

//   return (
//     <ProSidebar
//       style={{
//         height: "100%",
//         top: "auto",
//         display: isOpen ? "block" : "none",
//         backgroundColor: theme.palette.neutral.light,
//       }}
//       breakPoint="md"
//     >
//       <Menu iconShape="square">
//         <MenuItem>
//           <Link to="/documentation">Documentation</Link>
//         </MenuItem>
//         <MenuItem>
//           <Link to="/AddUser">Add User</Link>
//         </MenuItem>
//         <MenuItem>
//           <Link to="/AllUser">All User</Link>
//         </MenuItem>
//       </Menu>
//     </ProSidebar>
//   );
// }
import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";
import SourceOutlinedIcon from "@mui/icons-material/SourceOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import StyleIcon from "@mui/icons-material/Style";
import { Link, useNavigate } from "react-router-dom";

function SideNav() {
  const { collapsed } = useProSidebar();
  const theme = useTheme();

  return (
    <Sidebar
      style={{ height: "100%", top: "auto" }}
      breakPoint="md"
      backgroundColor={theme.palette.neutral.light}
    >
      {/* <Box sx={styles.avatarContainer}>
        <Avatar
          sx={styles.avatar}
          alt="Masoud"
          src="src/assets/avatars/masoud.jpeg"
        />
        {!collapsed ? (
          <Typography variant="body2" sx={styles.yourChannel}>
            Your Channel
          </Typography>
        ) : null}
        {!collapsed ? (
          <Typography variant="overline">React with Masoud</Typography>
        ) : null}
      </Box> */}

      <Menu
        menuItemStyles={{
          button: ({ level, active }) => {
            return {
              backgroundColor: active
                ? theme.palette.neutral.medium
                : undefined,
            };
          },
        }}
      >
        <MenuItem
          active={window.location.pathname === "/"}
          component={<Link to="/" />}
          icon={<DashboardOutlinedIcon />}
        >
          {" "}
          <Typography variant="body2">Dashboard</Typography>{" "}
        </MenuItem>

        <MenuItem
          active={window.location.pathname === "/AddUser"}
          component={<Link to="/AddUser" />}
          icon={<SourceOutlinedIcon />}
        >
          {" "}
          <Typography variant="body2">Add Users </Typography>
        </MenuItem>

        <MenuItem
          active={window.location.pathname === "/AllUser"}
          component={<Link to="/AllUser" />}
          icon={<AnalyticsOutlinedIcon />}
        >
          {" "}
          <Typography variant="body2">All Users</Typography>
        </MenuItem>

        <MenuItem
          active={window.location.pathname === "/customization"}
          component={<Link to="/customization" />}
          icon={<StyleOutlinedIcon />}
        >
          {" "}
          <Typography variant="body2">Customization </Typography>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default SideNav;

/**
 * @type {import("@mui/material").SxProps}
 */
const styles = {
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    my: 5,
  },
  avatar: {
    width: "40%",
    height: "auto",
  },
  yourChannel: {
    mt: 1,
  },
};
