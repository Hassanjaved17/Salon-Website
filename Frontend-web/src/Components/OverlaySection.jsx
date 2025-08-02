import React from 'react';
import { motion } from 'framer-motion';

const OverlaySection = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
      {/* Background Image */}
      <img
        src="/your-image.jpg"
        alt="Salon Background"
        className="w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to Hassan's Salon
        </h1>
        <p className="text-base md:text-lg max-w-xl mb-6">
          Feel confident with our professional beauty and grooming services.
        </p>
        <button className="bg-[#F66076] px-6 py-3 text-sm md:text-base rounded-full hover:bg-[#e6556a] transition">
          Book Appointment
        </button>
      </motion.div>
    </div>
  );
};

export default OverlaySection;
