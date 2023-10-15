import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";

const Layout = ({ children, isSideBarActive = true }) => {
  return isSideBarActive ? (
    <>
      <main className="w-full flex">
        <Sidebar />
        <section className="w-full h-screen p-5">{children}</section>
      </main>
    </>
  ) : (
    <main className="w-full">
      <section>{children}</section>
    </main>
  );
};

export default Layout;
