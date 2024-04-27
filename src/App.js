import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ShoppingCartProvider from "./context/ShoppingCartContext";
import Contact from "./components/Contact";
import Store from "./components/Contain-item/Store";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
const App = () => {
  return (
    <ShoppingCartProvider>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
    </ShoppingCartProvider>
  );
};

export default App;
