import Home from "./components/pages/home/Home";
import Footer from "./components/layouts/footer/Footer";
import MyNavbar from "./components/layouts/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { BrowserRouter, Routes, Route } from "react-router";

import Productos from "./components/pages/productos/Productos";
import Cart from "./components/pages/cart/Cart";
import { ItemDetail } from "./components/pages/itemDetail/ItemDetail";
import { Checkout } from "./components/pages/checkout/Checkout";
import CartContextProvider from "./context/CartContext";
import { Toaster } from "sonner";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartContextProvider>
          <Toaster duration={2000} richColors />
          <MyNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Productos />} />
            <Route path="/category/:name" element={<Productos />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/itemDetail/:id" element={<ItemDetail />} />
            <Route path="/category/:sub-category" element={<Productos />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h2>404 not found</h2>} />
          </Routes>
          <Footer />
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
