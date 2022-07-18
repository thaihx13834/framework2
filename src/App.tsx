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

function App() {
  const [product, setProduct] = useState<ProductType[]>([]);
  const [category, setCategory] = useState<CategoryType[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await listProduct();
      setProduct(data);
    };
    const getCategories = async () => {
      const { data } = await listCategory();
      setCategory(data);
      console.log(data);
    };
    getCategories();
    getProducts();
  }, []);

  const handleRemove = async (id?: string) => {
    const data = await deleteProduct(id);
    setProduct(product.filter((item) => item.id !== id));
  };

  const handleUpdateStatus = async (statusD: number, id: string) => {
    const { data } = await editStatusProduct({ status: statusD }, id);

    setProduct(product.map((item) => (item.id == id ? data : item)));
  };

  const handleGetPrWithCategory = async (value: string) => {
    if (value === undefined) {
      const { data } = await listProduct();
      setProduct(data);
    } else {
      const { data } = await GetPrWithCategory(value);
      setProduct(data);
    }
  };

  const handleAdd = async (value: ProductType) => {
    const { data } = await addProduct(value);
    try {
      setProduct([data, ...product]);
    } catch (error) {
      alert("Khong thanh cong");
    }
  };

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
            <Route
              index
              element={
                <Product
                  products={product}
                  onRemove={handleRemove}
                  categories={category}
                  onUpdateStatus={handleUpdateStatus}
                  onGetPrWithCategory={handleGetPrWithCategory}
                />
              }
            />
            <Route
              path="add"
              element={<AddProduct categories={category} onAdd={handleAdd} />}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
