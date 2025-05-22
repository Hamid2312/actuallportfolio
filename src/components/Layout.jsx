import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CursorBubbling from "./CursorBubbling";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <CursorBubbling />
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;