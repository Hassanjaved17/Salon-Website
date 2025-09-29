import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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

// 🔑 Loader Component
const Loader = ({ fadeOut }) => (
  <div
    className={`fixed inset-0 z-[9999] bg-[#F6526D] flex items-center justify-center transition-opacity duration-500 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
  >
    {/* Bouncing Dots */}
    <div className="flex space-x-3">
      <motion.span
        className="w-4 h-4 bg-white rounded-full"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
      />
      <motion.span
        className="w-4 h-4 bg-white rounded-full"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
      />
      <motion.span
        className="w-4 h-4 bg-white rounded-full"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
      />
    </div>
  </div>
);

// 🔑 Routes wrapper
const AnimatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/pages" element={<Pages />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

const AppContent = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const location = useLocation();

  // 👇 show loader and fade out after page renders
  const triggerLoader = () => {
    setLoading(true);
    setFadeOut(false);

    // allow route DOM to render first
    setTimeout(() => {
      setFadeOut(true); // start fade
      setTimeout(() => setLoading(false), 600); // hide after fade
    }, 800); // adjust this: 800ms "minimum wait"
  };

  // 👇 loader on first mount
  useEffect(() => {
    triggerLoader();
  }, []);

  // 👇 loader on every route change
  useEffect(() => {
    triggerLoader();
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader fadeOut={fadeOut} />}
      {!loading && (
        <motion.div
          key={location.pathname} // 👈 force re-animate each page
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ScrollProgress />
          <Navbar onLinkClick={triggerLoader} />
          <AnimatedRoutes />
          <Footer />
        </motion.div>
      )}
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
