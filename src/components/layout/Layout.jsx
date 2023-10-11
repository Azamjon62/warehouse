import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";

const Layout = ({ children }) => {
  const [isSideBarActive, setIsSideBarActive] = useState(true);
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
