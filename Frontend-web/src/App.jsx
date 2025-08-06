import React, { useEffect, useState } from "react";
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
import ScrollProgress from "./Components/ScrollProgress ";
import { motion } from "framer-motion";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1000); // start fade out
    const hideLoader = setTimeout(() => setLoading(false), 1500); // hide after fade
    return () => {
      clearTimeout(timer);
      clearTimeout(hideLoader);
    };
  }, []);

  return (
    <>
      {/* Modern Smooth Loader */}
      {loading && (
        <div
          className={`fixed inset-0 z-[9999] bg-[#F6526D] flex items-center justify-center transition-opacity duration-500 ${
            fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-[6px] border-white border-t-transparent animate-spin" />
            <div className="absolute inset-2 rounded-full bg-[#F6526D] shadow-inner" />
          </div>
        </div>
      )}

      {/* Main App Content with Animation */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <BrowserRouter>
            <ScrollProgress />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/pages" element={<Pages />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </motion.div>
      )}
    </>
  );
};

export default App;
