import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Pages from "./pages/Pages";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./Components/footer/Footer";
import InfiniteTopLine from "./Components/InfiniteTopLine";
import ScrollToTop from "./Components/ScrollToTop";

const AppRoutes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <InfiniteTopLine />

      {!loading && (
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
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
          <ScrollToTop />
        </motion.div>
      )}
    </>
  );
};

export default AppRoutes;
