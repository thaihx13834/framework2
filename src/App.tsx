import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import ClientLayout from "./layouts/ClientLayout";
import Homepage from "./pages/Homepage";
import Prooduct from "./pages/Prooduct";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Phone from "./pages/admin/phone/Phone";
import AddPhone from "./pages/admin/phone/AddPhone";

function App() {
  const [count, setCount] = useState(0);

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
          <Route path="phones">
            <Route index element={<Phone />} />
            <Route path="add" element={<AddPhone />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
