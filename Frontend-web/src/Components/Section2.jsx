import React from "react";
import { CiClock2 } from "react-icons/ci";

const Section2 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-6 py-16 gap-12">
      <div className="relative flex flex-col items-center justify-center gap-6 mt-10">
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <img
            src="./sidesection-img1.webp"
            alt="Spa treatment"
            className="w-full sm:w-1/2 object-cover rounded-lg shadow-md mt-10"
          />
          <img
            src="./sidesection-img2.webp"
            alt="Salon service"
            className="w-full sm:w-1/2 object-cover rounded-lg shadow-md mb-10"
          />
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="bg-[#F6526D] w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full border-4 border-white border-dashed flex flex-col items-center justify-center text-white text-center shadow-xl">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold">20</p>
            <p className="text-xs sm:text-sm md:text-base mt-1">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-6 text-center md:text-left mt-10 md:mt-0">
        <p style={{fontFamily: 'niconne, cursive'}} className="text-2xl leading-tight text-[#F6526D]">
          Welcome Spa and Salon
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
          From Hair to Skincare,
          <br className="hidden md:block" /> We Cover It All
        </h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetuer. Proin gravida nibh vel velit
          auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
          elit consequat ipsum, nec sagittis sem nibh id elit.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 sm:gap-4 pt-2">
          <CiClock2 className="text-[#F6526D] w-6 h-6" />
          <div>
            <p className="text-md text-black font-semibold">
              Monday - Friday <span className="font-bold">08:00-19:00</span>
            </p>
            <p className="text-sm text-gray-500">
              Saturday and Sunday - CLOSED
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
