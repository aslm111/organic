import './App.css'
import ProductDetail from './pages/ProductDetail'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./pages/MainLayout";
import LandingPage from "./pages/LandingPage";
import CartPage from './pages/CartPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/productdetail" element={<ProductDetail />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
