import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Shop from "./components/pages/Shop";
import CreatProducts from "./components/pages/CreatProducts";
import Admin from "./components/pages/Admin";
import Index from "./components/pages/Index";
import Details from "./components/pages/Details";
import "bootstrap/dist/css/bootstrap.min.css";

import ChangeProducts from "./components/pages/ChangeProducts";
import InforUser from "./components/pages/InforUser";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<InforUser></InforUser>}></Route>
        <Route path="/" element={<ChangeProducts />}></Route>
        <Route path="/index/detail" element={<Details></Details>}></Route>
        <Route path="/index" element={<Index></Index>}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/admin/creatProducts" element={<CreatProducts />}></Route>
        <Route path="/admin/shop" element={<Shop />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Outlet />
    </div>
  );
}
