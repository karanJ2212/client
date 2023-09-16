import React from "react";
import AddUser from "./components/AddUser";
import Navbar from "./components/Navbar";
import ClaimZippy from "./components/ClaimZippy";
import AllUsers from "./components/AllUsers";
import EditUser from "./components/EditUser";

import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ClaimZippy />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/AllUser" element={<AllUsers />} />
          <Route path="/EditUser/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
