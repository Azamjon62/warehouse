import Sidebar from "./components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/product/Product";
import Dashboard from "./components/Dashboard";
import Billing from "./components/Billing";
import RTL from "./components/RTL";
import Login from "./components/Login";
import Layout from "./components/layout/Layout";
import AddProducts from "./components/AddProducts";

function App() {
  return (
    <>
      <div className="flex h-[100%]">
        <Layout />
        <main>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/rtl" element={<RTL />} />
            <Route path="/products" element={<Product />} />
            <Route path="/addproducts" element={<AddProducts />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
