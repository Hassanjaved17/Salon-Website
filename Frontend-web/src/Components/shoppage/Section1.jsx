import React from 'react';

const Section1 = () => {
  return (
    <div
      className="relative h-40 sm:h-48 md:h-72 flex items-center pl-6 sm:pl-12 bg-center bg-cover"
      style={{
        backgroundImage:
          'url(//dictate.webinane.com/wp-content/uploads/2025/01/slide-2-5.jpg)',
      }}
    >
      {/* Dark-to-transparent gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3A3A39]/70 to-transparent"></div>

      {/* Text */}
      <h1 className="relative text-white text-2xl sm:text-3xl md:text-5xl font-bold">
        Shop
      </h1>
    </div>
  );
};
  
export default Section1;
