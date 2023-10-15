import React from "react";
import { Route, Routes } from "react-router-dom";
import { Billing, Dashboard, Login, Products, AddProducts, RTL } from "./pages";
import { ProtectedRoutes } from "./components";

function App() {
  return (
    <>
      <div className="flex h-[100%]">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/rtl" element={<RTL />} />
            <Route path="/products" element={<Products />} />
            <Route path="/addproducts" element={<AddProducts />} />
            <Route path="*" element={<h1>Error 404 not found</h1>} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
