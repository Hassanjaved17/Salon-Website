import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Pages from "./pages/Pages";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./Components/header/Navbar";
import Footer from "./Components/footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/pages" element={<Pages />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
