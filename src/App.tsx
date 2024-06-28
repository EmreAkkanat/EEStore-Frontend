import { Routes, Route, Navigate } from "react-router-dom";
import "./styles.scss";

// ui
import HomePage from "./ui/pages/home/HomePage";
import ProductDetailPage from "./ui/pages/product-detail/ProductDetailPage";

// admin
import Layout from "./admin/layout/Layout";
import AdminHomePage from "./admin/pages/home/HomePage";
import ProductPage from "./admin/pages/product/ProductPage";
import CategoryPage from "./admin/pages/category/CategoryPage";
import OrderPage from "./admin/pages/order/OrderPage";


function App() {
  return (
    <Routes>
      <Route index path='/' element={<HomePage />} />
      <Route index path='/product-detail' element={<ProductDetailPage />} />
      <Route path="/admin" element={<Layout />}>
        <Route index element={<AdminHomePage />} />


        <Route index path="categories/category-main" element={<CategoryPage />} />
        <Route path="categories/category" element={<CategoryPage />} />
        <Route path="categories/category-sub" element={<CategoryPage />} />

        <Route path="products" element={<ProductPage />} />
        <Route path="orders" element={<OrderPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
