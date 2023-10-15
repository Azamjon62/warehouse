import { Route, Routes } from "react-router-dom";
import { Billing, Dashboard, Login, Products, AddProducts, RTL } from "./pages";
import { useAuthContext } from "./contexts/AuthContext";

import React from "react";

function App() {
  const { isLogin } = useAuthContext();
  return (
    <>
      <div className="flex h-[100%]">
        <Routes>
          {isLogin ? (
            <>
              <Route index element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/rtl" element={<RTL />} />
              <Route path="/products" element={<Products />} />
              <Route path="/addproducts" element={<AddProducts />} />
            </>
          ) : (
            <Route path="/login" element={<Login />} />
          )}
          <Route path="*" element={<h1>Error 404 not found</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
