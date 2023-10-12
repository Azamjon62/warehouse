import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";

const Layout = ({ children }) => {
  const isSideBarActive = true;
  console.log(children);
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
