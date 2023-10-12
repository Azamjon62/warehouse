import React from "react";
import { Layout, Login } from "../components";

const LoginPage = () => {
  return (
    <>
      <Layout isSideBarActive={false}>
        <Login />
      </Layout>
    </>
  );
};

export default LoginPage;
