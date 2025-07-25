import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md  left-0 z-50">
      <div className="container mx-auto px-2 py-4 flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <img
            src="./Dictate-logo-new.svg"
            alt="Logo"
            className="h-16 w-auto"
          />
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-800 font-normal text-lg">
          <Link to="/" className="hover:text-[#F65297] transition">
            Home
          </Link>
          <Link to="/shop" className="hover:text-[#F65297] transition">
            Shop
          </Link>
          <Link to="/services" className="hover:text-[#F65297] transition">
            Services
          </Link>
          <Link to="/blog" className="hover:text-[#F65297] transition">
            Blog
          </Link>
          <Link to="/pages" className="hover:text-[#F65297] transition">
            Pages
          </Link>
          <Link to="/about" className="hover:text-[#F65297] transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-[#F65297] transition">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-2xl cursor-pointer">
            <FaShoppingBasket />
          </div>
          <button className="rounded-full bg-[#F66076] text-white font-light px-5 py-3 md:px-9 md:py-4 text-sm md:text-base">
  Appointment
</button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
