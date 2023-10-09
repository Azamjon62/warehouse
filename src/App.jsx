import Sidebar from "./components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/product/Product";
import Dashboard from "./components/Dashboard";
import Billing from "./components/Billing";
import RTL from "./components/RTL";

function App() {
  return (
    <>
      <div className="flex h-[100%]">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/rtl" element={<RTL />} />
            <Route path="/products" element={<Product />} />
            <Route path="/add-products" element={<Product />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
