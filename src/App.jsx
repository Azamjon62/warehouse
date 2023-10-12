import { Route, Routes } from "react-router-dom";
import { Billing, Dashboard, Login, Products, AddProducts, RTL } from "./pages";

function App() {
  return (
    <>
      <div className="flex h-[100%]">
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/rtl" element={<RTL />} />
            <Route path="/products" element={<Products />} />
            <Route path="/addproducts" element={<AddProducts />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h1>Error 404 not found</h1>} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
