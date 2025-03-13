import "./App.css";
import ProductDetail from "./pages/ProductDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./pages/MainLayout";
import LandingPage from "./pages/LandingPage";
import InnerLayout from "./pages/InnerLayout";
import ProductPage from "./pages/ProductPage";
import Checkout from "./pages/Checkout";
import CartPage from './pages/CartPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/products" element={<InnerLayout />}>
            <Route path="/products/" element={<ProductPage />}></Route>
            <Route path="/products/:category" element={<ProductPage />}></Route>
          </Route>
          <Route path="/productdetail" element={<ProductDetail />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/productdetail" element={<ProductDetail />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
