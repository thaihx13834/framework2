import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import ClientLayout from "./layouts/ClientLayout";
import Homepage from "./pages/Homepage";
import Prooduct from "./pages/Prooduct";
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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Homepage />} />
          <Route path="products" element={<Prooduct />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products">
            <Route index element={<Product />} />
            <Route path="add" element={<AddProduct />} />
            <Route path="edit/:id" element={<EditProduct />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
