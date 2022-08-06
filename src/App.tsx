import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import ClientLayout from "./layouts/ClientLayout";
import Homepage from "./pages/Homepage";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import AddProduct from "./pages/admin/products/AddProduct";
import Product from "./pages/admin/products/Product";
import { ProductType } from "./types/ProductType";
import {
  addProduct,
  deleteProduct,
  editStatusProduct,
  GetPrWithCategory,
  listProduct,
} from "./api/product";

import "react-toastify/dist/ReactToastify.css";
import { CategoryType } from "./types/CategoryType";
import { listCategory } from "./api/category";
import EditProduct from "./pages/admin/products/EditProduct";
import Category from "./pages/admin/category/Category";
import AddCategory from "./pages/admin/category/AddCategory";
import EditCategory from "./pages/admin/category/EditCategory";

import "swiper/css/bundle";
import ProductDetail from "./pages/client/ProductDetail";
import ProductPage from "./pages/client/ProductPage";
import Signup from "./pages/client/Signup";
import Signin from "./pages/client/Signin";
import PrivateRouter from "./pages/client/PrivateRouter";
import SearchPage from "./pages/client/SearchPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Homepage />} />
          <Route path="category/:id" element={<ProductPage />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
        <Route
          path="admin"
          element={
            <PrivateRouter>
              <AdminLayout />
            </PrivateRouter>
          }
        >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          {/* Product router */}
          <Route path="products">
            <Route index element={<Product />} />
            <Route path="add" element={<AddProduct />} />
            <Route path="edit/:id" element={<EditProduct />} />
          </Route>
          {/* Category router */}

          <Route path="categories">
            <Route index element={<Category />} />
            <Route path="add" element={<AddCategory />} />
            <Route path="edit/:id" element={<EditCategory />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
