import React from "react";
import ReactDOM from "react-dom/client";
import { NavBar } from "./components/layout";
import { Footer } from "./components/layout";
import { BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import Notfound from "./pages/Notfound";
import { Route } from 'react-router-dom';
import ProductList from "./pages/admin/products/ProductList";
import CreateProducts from "./pages/admin/products/CreateProducts";
function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/products" element={<ProductList />} />
        <Route path="/admin/products/create" element={<CreateProducts/>}/>
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
