import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./pages/MainLayout";
import LandingPage from "./pages/LandingPage";
import InnerLayout from "./pages/InnerLayout";
import ProductPage from "./pages/ProductPage";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
