

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingBasket, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/pages", label: "Pages" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="./Dictate-logo-new.svg"
            alt="Logo"
            className="h-16 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-800 font-normal text-lg">
          {navLinks.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              whileHover="hover"
              initial="initial"
              animate="initial"
            >
              <Link
                to={item.to}
                className="transition-colors duration-300 group-hover:text-[#F65297]"
              >
                {item.label}
              </Link>
              <motion.span
                className="absolute left-0 -bottom-1 h-[2px] bg-[#F65297]"
                variants={{
                  initial: { width: 0 },
                  hover: { width: "100%", transition: { duration: 0.3 } },
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
            <div className="text-2xl cursor-pointer">
            <FaShoppingBasket />
          </div>

          {/* Appointment Button */}
          <button className="hidden sm:block rounded-full bg-[#F66076] text-white font-light px-5 py-3 md:px-9 md:py-4 text-sm md:text-base">
            Appointment
          </button>

          {/* Mobile Menu Toggle */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white px-4 pb-4 flex flex-col gap-4 text-gray-800 font-medium"
        >
          {navLinks.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              whileHover="hover"
              initial="initial"
              animate="initial"
            >
              <Link
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="block py-2 transition-colors duration-300 group-hover:text-[#F65297]"
              >
                {item.label}
              </Link>
              <motion.span
                className="absolute left-0 bottom-1 h-[2px] bg-[#F65297]"
                variants={{
                  initial: { width: 0 },
                  hover: { width: "100%", transition: { duration: 0.3 } },
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;