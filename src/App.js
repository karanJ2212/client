import React from "react";
import AddUser from "./components/AddUser";
import Navbar from "./components/Navbar";
import ClaimZippy from "./components/ClaimZippy";
import AllUsers from "./components/AllUsers";
import EditUser from "./components/EditUser";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import theme from "./config/theme";
import Sidenav from "./components/Sidenav";
import AppHeader from "./components/AppHeader";
import { ProSidebarProvider } from "react-pro-sidebar";

export default function App() {
  return (
    <div className="app">
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <ProSidebarProvider>
            <CssBaseline />
            <BrowserRouter>
              <AppHeader />
              <Box sx={styles.container}>
                <Sidenav />
                <Routes>
                  {/* <Route path="/" element={<ClaimZippy />} /> */}
                  <Route path="/AddUser" element={<AddUser />} />
                  <Route path="/AllUser" element={<AllUsers />} />
                  <Route path="/EditUser/:id" element={<EditUser />} />
                </Routes>
                <Box component={"main"} sx={styles.mainSection}></Box>
              </Box>
            </BrowserRouter>
          </ProSidebarProvider>
        </ThemeProvider>
      </React.Fragment>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ClaimZippy />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/AllUser" element={<AllUsers />} />
          <Route path="/EditUser/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}
/**
 * @type {import('@mui/material').SxProps}
 */
const styles = {
  container: {
    display: "flex",
    bgcolor: "neutral.light",
    height: "calc(100% - 64px)",
  },
  mainSection: {
    p: 4,
    width: "100%",
    height: "100%",
    overflow: "auto",
  },
};
