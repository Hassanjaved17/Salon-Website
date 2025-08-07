import React from 'react';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variant
const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const HeroSection8 = () => {
  const articles = [
    {
      id: 1,
      date: 'January 1, 2025',
      title: 'Which Oil Is Better For Massage And What Are Its Benefits?',
      description:
        'Etiam semper nibh orci, ac tincidunt mi consectetur a. In quis tortor ex. Morbi cursus sed neque quis dictum. Duis bibendum ullamcor per pharetra.',
      image: '/card4sec8.webp',
      category: 'Wellness',
    },
    {
      id: 2,
      date: 'January 1, 2025',
      title: 'How To Maintain The Beauty And Strength Of Your Hair?',
      description:
        'Etiam semper nibh orci, ac tincidunt mi consectetur a. In quis tortor ex. Morbi cursus sed neque quis dictum. Dius bibendum ullamcor per pharetra.',
      image: '/card2sec8.webp',
      category: 'Hair Care',
    },
    {
      id: 3,
      date: 'January 1, 2025',
      title: 'How To Avoid Sun And Dust With Facial?',
      description:
        'Etiam semper nibh orci, ac tincidunt mi consectetur a. In quis tortor ex. Morbi cursus sed neque quis dictum. Dius bibendum ullamcor per pharetra.',
      image: '/card3sec8.webp',
      category: 'Skincare',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div
            style={{ fontFamily: 'niconne, cursive' }}
            className="text-[#F6526D] text-2xl font-normal italic mb-3"
          >
            Recent Blog
          </div>
          <p className="text-4xl md:text-6xl font-semibold text-black mb-6">
            News & Articles
          </p>
          <div className="w-24 h-1 bg-[#F6526D] mx-auto rounded-full"></div>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              className="group bg-white shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              {/* Image Sectio  */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Date Badge */}
                <div className="absolute top-2 left-0 sm:top-4">
                  <div className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-r-full shadow-lg">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <Calendar size={14} className="sm:w-4 sm:h-4 w-3 h-3" />
                      <span className="text-xs sm:text-sm font-semibold text-white leading-tight">
                        {article.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 right-2 sm:top-7 sm:right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-[#F6526D] px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold shadow-md">
                    {article.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-lg font-semibold text-black mb-4 leading-relaxed group-hover:text-rose-500 transition-colors duration-300">
                  {article.title}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {article.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection8;
