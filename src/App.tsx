import { Routes, Route, Navigate } from "react-router-dom";
import "./styles/styles.scss";

// pages
import HomePage from "./pages/HomePage/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";

function App() {
  return (
    <Routes>
      <Route index path='/' element={<HomePage />} />
      <Route index path='/product-detail' element={<ProductDetailPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
