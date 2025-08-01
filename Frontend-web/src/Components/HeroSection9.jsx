import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const HeroSection9 = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const isLeftInView = useInView(leftRef, { once: true, amount: 0.4 });
  const isRightInView = useInView(rightRef, { once: true, amount: 0.4 });

  return (
    <div className="bg-yellow-100 py-20 px-4 md:px-10 flex flex-col md:flex-row gap-6 justify-center items-center">

      {/* Left Card */}
      <motion.div
        ref={leftRef}
        initial={{ opacity: 0, x: -100 }}
        animate={isLeftInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative w-full md:w-[50%] min-h-[400px] sm:min-h-[450px] md:min-h-[500px] bg-cover bg-center rounded-md overflow-hidden shadow-lg"
        style={{ backgroundImage: `url('/sec9img1.webp')` }}
      >
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-[#D2F0F6]/80 p-6 md:p-10 text-center rounded-md w-[90%] sm:w-[80%] md:w-[70%]">
            <p className="text-sm uppercase tracking-wide text-gray-500 leading-relaxed">
              To get the best of everything from head to toe
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold my-2 text-black">Get 20% Off Package</h2>
            <button className="mt-4 px-6 py-3 bg-black text-white text-sm hover:bg-gray-800 transition">
              Buy as a Gift Card
            </button>
          </div>
        </div>
      </motion.div>

      {/* Right Card */}
      <motion.div
        ref={rightRef}
        initial={{ opacity: 0, x: 100 }}
        animate={isRightInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative w-full md:w-[50%] min-h-[400px] sm:min-h-[450px] md:min-h-[500px] bg-cover bg-center rounded-md overflow-hidden shadow-lg"
        style={{ backgroundImage: `url('/sec9img2.webp')` }}
      >
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-[#F3DCD8]/80 p-6 md:p-10 text-center rounded-md w-[90%] sm:w-[80%] md:w-[70%]">
            <p className="text-sm uppercase tracking-wide text-gray-500 leading-relaxed">
              To get the best of everything from head to toe
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold my-2 text-black">Get 20% Off Package</h2>
            <button className="mt-4 px-6 py-3 bg-rose-500 text-white text-sm hover:bg-rose-600 transition">
              Buy as a Gift Card
            </button>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default HeroSection9;
