import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 10px;
  text-decoration: none;
  color: white;
`;

export default function Navbar() {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/">clamZippy</Tabs>

        <Tabs to={"/AddUser"}>Add User</Tabs>

        <Tabs to={"/AllUser"}>All User</Tabs>
      </Toolbar>
    </Header>
  );
}
