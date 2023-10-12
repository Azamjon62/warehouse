import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";

const Layout = ({ isSideBarActive = true, children }) => {
  return isSideBarActive ? (
    <>
      <Sidebar />
      {children}
    </>
  ) : (
    { children }
  );
};

export default Layout;
