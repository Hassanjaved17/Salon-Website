import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import products from "../Data/ProductsData.jsx";

export default function Products() {
  const [visible, setVisible] = useState(8);

  const toggleProducts = () => {
    if (visible === 8) {
      setVisible(products.length); // show all
    } else {
      setVisible(8); // collapse back
    }
  };

  return (
    <div className="p-8 mx-8 mt-15">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <AnimatePresence>
          {products.slice(0, visible).map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4 }}
              // 🔑 make card focusable for mobile taps
              className="bg-white shadow-lg border border-gray-100 rounded-md overflow-hidden relative group w-full max-w-xs mx-auto"
              tabIndex={0}
            >
              {/* Sale Badge */}
              {p.sale && (
                <span className="absolute top-4 left-4 bg-[#F6526D] text-white text-sm font-semibold w-16 h-16 flex items-center justify-center rounded-full">
                  Sale!
                </span>
              )}

              {/* Product Image */}
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-70 object-contain p-2"
                />

                {/* Add to Cart Button */}
                <button
                  aria-label={`Add ${p.title} to cart`}
                  className="
                    absolute top-1/2 right-0 transform -translate-y-1/2
                    bg-black text-white p-3 shadow-md
                    opacity-0
                    group-hover:opacity-100          /* desktop hover */
                    group-focus-within:opacity-100   /* mobile tap */
                    transition
                  "
                >
                  <FaPlus />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                {/* Rating */}
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < p.rating ? "text-[#F6526D]" : "text-[#C9CDCF]"
                      } text-sm`}
                    />
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold mb-2 leading-tight hover:text-[#F6526D]">
                  {p.title}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-[#F6526D] font-light">
                    ${p.price.toFixed(2)}
                  </span>
                  {p.oldPrice && (
                    <span className="text-gray-400 line-through">
                      ${p.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show More / Show Less Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={toggleProducts}
          className="px-6 py-2 bg-[#F6526D] text-white font-semibold rounded-md hover:bg-[#d9445c] transition"
        >
          {visible === 8 ? "Show More" : "Show Less"}
        </button>
      </div>
    </div>
  );
}
