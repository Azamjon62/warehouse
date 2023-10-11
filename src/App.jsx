import Sidebar from "./components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/product/Product";
import AddProduct from "./pages/product/AddProduct";

function App() {
  return (
    <>
    <div className="flex h-[100%]" >
      <Sidebar />
      <main className="container max-w-6xl" >
        <Routes>
          <Route path="/products" element={<Product />} />
          <Route path="/add-products" element={<AddProduct />} />
        </Routes>
      </main>
    </div>

    </>
  );
}

export default App;
