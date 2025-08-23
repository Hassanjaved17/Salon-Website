import React from "react";
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import products from "../Data/ProductsData.jsx";

export default function Products() {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-8 mt-15">
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-white shadow-lg border border-gray-100 rounded-md overflow-hidden relative group w-full max-w-xs mx-auto"
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
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-3 shadow-md opacity-0 group-hover:opacity-100 transition"
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
        </div>
      ))}
    </div>
  );
}
