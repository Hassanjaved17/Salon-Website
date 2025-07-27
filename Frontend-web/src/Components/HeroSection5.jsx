import React from 'react';
import { PiFlowerLotusLight } from "react-icons/pi";
import { FaShoppingBasket } from "react-icons/fa";


// Sample product data
const products = [
  {
    id: 1,
    image: "/HairOil.webp",
    discount: "21%",
    name: "Hair Growth Oil",
    currentPrice: "$110.00",
    originalPrice: "$140.00"
  },
  {
    id: 2,
    image: "/Torfa-Massager.webp",
    discount: "40%",
    name: "Torfa Massager",
    currentPrice: "$90.00",
    originalPrice: "$150.00"
  },
  {
    id: 3,
    image: "/coconut-shampoo.webp",
    discount: "20%",
    name: "Coconut Shampo",
    currentPrice: "$60.00",
    originalPrice: "$75.00"
  },
  {
    id: 4,
    image: "/hair-cutting.webp",
    discount: "13%",
    name: "Hairdressing Set",
    currentPrice: "$35.00",
    originalPrice: "$40.00"
  }
];

const HeroSection5 = () => {
  return (
    <section className="py-20 bg-[#FFFFFF] relative overflow-hidden">
      {/* Top Text with Icon */}
      <div className="text-[#F66076] text-5xl flex justify-center mt-10">
        <PiFlowerLotusLight />
      </div>
      <div className="flex flex-col items-center justify-center text-center mt-4">
        <p style={{ fontFamily: 'Niconne, cursive' }} className="text-2xl text-[#F6526D]">
          Need an awesome
        </p>
        <p className="font-semibold text-4xl md:text-5xl text-black mt-3">
          Beauty Products
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#F6526D] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-yellow-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-200 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-yellow-200 rounded-full"></div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 relative mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="relative group">
              <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="absolute -top-3 -right-3 bg-[#F6526D] text-white rounded-full w-18 h-18 flex flex-col items-center justify-center shadow-lg z-10">
                  <span className="text-md font-bold ">{product.discount}</span>
                  <span className="text-xs">Discount</span>
                </div>
                <div className="relative h-48 mb-4 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-32 h-40 object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-xl font-bold text-[#F6526D]">
                      {product.currentPrice}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <button className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors mx-auto">
                    <FaShoppingBasket className="w-5 h-5" /></button>

                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
  </section>
  );
};

export default HeroSection5;
