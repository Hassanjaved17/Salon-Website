import React, { useEffect } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection8 = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const articles = [
        {
            id: 1,
            date: 'January 1, 2025',
            title: 'Which Oil Is Better For Massage And What Are Its Benefits?',
            description: 'Etiam semper nibh orci, ac tincidunt mi consectetur a. In quis tortor ex. Morbi cursus sed neque quis dictum. Duis bibendum ullamcor per pharetra.',
            image: "/card4sec8.webp",
            category: 'Wellness'
        },
        {
            id: 2,
            date: 'January 1, 2025',
            title: 'How To Maintain The Beauty And Strength Of Your Hair?',
            description: 'Etiam semper nibh orci, ac tincidunt mi consectetur a. In quis tortor ex. Morbi cursus sed neque quis dictum. Dius bibendum ullamcor per pharetra.',
            image: '/card2sec8.webp',
            category: 'Hair Care'
        },
        {
            id: 3,
            date: 'January 1, 2025',
            title: 'How To Avoid Sun And Dust With Facial?',
            description: 'Etiam semper nibh orci, ac tincidunt mi consectetur a. In quis tortor ex. Morbi cursus sed neque quis dictum. Dius bibendum ullamcor per pharetra.',
            image: '/card3sec8.webp',
            category: 'Skincare'
        }
    ];

    return (
        <div className="min-h-screen bg-[#FFFFFF] py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16" data-aos="fade-down">
                    <div style={{ fontFamily: 'niconne, cursive' }} className="text-[#F6526D] text-2xl font-normal italic mb-3">
                        Recent Blog
                    </div>
                    <p className="text-4xl md:text-6xl font-semibold text-black mb-6">
                        News & Articles
                    </p>
                    <div className="w-24 h-1 bg-[#F6526D] mx-auto rounded-full"></div>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div
                            key={article.id}
                            className="group bg-white shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
                            data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'}
                        >
                            {/* Image Section */}
                            <div className="relative overflow-hidden h-64">
                                <img
                                    src={article.image} //
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
                        </div>
                    ))}
                </div>

                {/* Newsletter Signup */}
                <div className="mt-20 bg-white rounded-3xl shadow-2xl p-12 text-center" data-aos="zoom-in">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">
                            Stay Updated with Beauty Tips
                        </h3>
                        <p className="text-gray-600 mb-8">
                            Subscribe to our newsletter and get the latest beauty trends, tips, and exclusive offers delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-full focus:border-rose-400 focus:outline-none focus:ring-4 focus:ring-rose-100 transition-all duration-300"
                            />
                            <button className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:from-rose-500 hover:to-pink-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection8;
