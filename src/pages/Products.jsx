import React from "react";
import { Layout, Product } from "../components";

const Products = () => {
  return (
    <>
      <Layout isDropdownActive={false}>
        <Product />
      </Layout>
    </>
  );
};

export default Products;
