import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope } from "react-icons/fa";

const HeroSection9 = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const isLeftInView = useInView(leftRef, { once: true, amount: 0.4 });
  const isRightInView = useInView(rightRef, { once: true, amount: 0.4 });

  return (
    <div className="bg-yellow-100 py-20 px-4 md:px-10">

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
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

      {/* Newsletter Section */}
      <div className="mt-16 text-center px-4">
        {/* Icon Circle */}
        <div className="w-16 h-16 rounded-full border border-black mx-auto flex items-center justify-center bg-[#FEF9C2] shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 text-2xl text-black mb-6">
          <FaEnvelope />
        </div>

        {/* Heading and Text */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-4xl font-semibold text-balck mb-4">
            Subscribe To Our Newsletter
          </h3>
          <p className="text-black font-light text-sm mb-8 leading-tight">
           Subscribe to Our Mailing List To Be The First To Know About New Products
          </p>

          {/* Input and Button */}
          <div className="w-full px-4">
  <div className="flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto">
    
    {/* Email Input */}
    <input
      type="email"
      placeholder="Enter your email"
      className="flex-1 w-full px-6 py-4 bg-white border border-gray-300 text-sm text-gray-800 placeholder-gray-400 rounded-full shadow-sm focus:outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-400 transition-all duration-300"
    />

    {/* Subscribe Button */}
    <button
      className="bg-[#F6526D] text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-[#e0475f] transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
    >
      SUBSCRIBE
    </button>
  </div>
</div>

        </div>
      </div>

    </div>
  );
};

export default HeroSection9;
