// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; // Adjust import based on your naming
import CursorBubbling from "./CursorBubbling";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CursorBubbling /> {/* Add CursorBubbling here */}
      <main>
        <Outlet /> {/* Renders the child route components */}
      </main>
    </div>
  );
};

export default Layout;