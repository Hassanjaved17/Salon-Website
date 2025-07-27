import React from "react";
import { PiFlowerLotusLight } from "react-icons/pi";

const Section3 = () => {
  return (
    <section className="px-4 py-10">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        {/* Icon */}
        <div className="text-[#F66076] text-5xl flex justify-center">
          <PiFlowerLotusLight />
        </div>

        {/* Text */}
        <div>
          <p style={{ fontFamily: 'Niconne, cursive' }} className="text-lg md:text-xl font-medium text-[#F66076] -mt-4">
            Welcome Spa and Salon
          </p>
          <p className="text-xl md:text-5xl font-semibold text-black">
            Salon Services
          </p>
        </div>

        {/* Images */}
        <div className="relative w-full max-w-md mx-auto mt-8">
          {/* Background Image (Man) */}
          <img
            src="./midsection.webp"
            alt="Main"
            className="w-full h-auto rounded-full"
          />

          {/* Overlay Flower Image */}
          <img
            src="./towel-flower.webp"
            alt="Flower"
            className="absolute bottom-0 left-1/2 transform -translate-x-[40%] translate-y-1/3 w-32 sm:w-40 md:w-48"
          />
        </div>
      </div>
    </section>
  );
};

export default Section3;
