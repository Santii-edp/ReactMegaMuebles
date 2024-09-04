import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "../pages/login";
import Menu from "../pages/menu";
import Register from "../pages/register";
import AdminMenu from "../pages/MenuADMIN";
import ClientMenu from "../pages/MenuClient";
import NavBar from "../components/Navbar";
import Catalog from "../pages/Catalogo";
import ProductDetail from "../pages/ProductDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/AdminMenu" element={<AdminMenu />} />
        <Route path="/ClientMenu" element={<ClientMenu />} />
        <Route path="/NavBar" element={<NavBar />} />
        <Route path="/" element={<Catalog />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />







      </Routes>
    </Router>
  );
}

export default App;

