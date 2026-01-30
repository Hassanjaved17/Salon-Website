import React, { useState, useEffect } from 'react';

const BlogCards = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const blogPosts = [
    {
      id: 1,
      date: 'January 6, 2026',
      title: 'How to Beautify Your Nails with Expert Nail Polish Care?',
      excerpt: 'Aorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl turpis, tempus nec egestas ac, mol vel eros. Vestibulum',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=80',
    },
    {
      id: 2,
      date: 'January 6, 2026',
      title: 'Whether Or Not The Body Should Rest After The Massage.',
      excerpt: 'feugiat sem quis dictum. Mauris blandit, mi convallis tincidunt imperdiet, eros mi fermentum lacus, at so es nibh urna',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80',
    },
    {
      id: 3,
      date: 'January 5, 2026',
      title: 'Essential Oils for Natural Wellness and Self-Care',
      excerpt: 'Discover the therapeutic benefits of essential oils and how they can transform your daily wellness routine with natural healing.',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=1200&q=80',
    },
    {
      id: 4,
      date: 'January 4, 2026',
      title: 'Skincare Routine for Every Season of the Year',
      excerpt: 'Adapt your skincare routine throughout the year with expert tips for maintaining healthy, radiant skin in any weather.',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80',
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative h-[400px] lg:h-[500px] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(45, 45, 45, 0.7), rgba(45, 45, 45, 0.8)), url('https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=1600&q=80')`
        }}
      >
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
              Our Blog
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex items-center space-x-3 text-base">
              <a href="/" className="text-rose-300 hover:text-white transition-colors duration-300">
                Home
              </a>
              <span className="text-gray-400">/</span>
              <span className="text-white">Blog</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="space-y-0">
          {blogPosts.map((post, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={post.id}
                className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 bg-gray-50 mb-8 lg:mb-0 overflow-hidden`}>
                  {/* Image Section */}
                  <div
                    className={`relative h-80 lg:h-[400px] xl:h-[450px] overflow-hidden ${isEven ? 'lg:order-2' : 'lg:order-1'
                      }`}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content Section */}
                  <div
                    className={`flex flex-col justify-center p-8 lg:p-12 xl:p-16 bg-gray-50 ${isEven ? 'lg:order-1' : 'lg:order-2'
                      }`}
                  >
                    {/* Date */}
                    <div className="flex items-center text-rose-500 mb-4">
                      <svg
                        className="w-5 h-5 mr-2.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium">{post.date}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-4 lg:mb-5 leading-tight">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-6 lg:mb-8 leading-relaxed text-base">
                      {post.excerpt}
                    </p>

                    {/* Read More Button */}
                    <div>
                      <button className="px-8 py-3.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-sm">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex justify-center items-center space-x-4">
          <button className="px-6 py-2.5 rounded-full bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-400 hover:text-gray-800 transition-all duration-300 font-medium shadow-sm hover:shadow-md">
            Previous
          </button>
          <div className="flex space-x-2">
            <button className="w-11 h-11 rounded-full bg-black text-white font-semibold shadow-md hover:bg-gray-800 transition-colors duration-300">
              1
            </button>
            <button className="w-11 h-11 rounded-full bg-white text-gray-700 font-semibold border-2 border-gray-200 hover:border-gray-400 hover:text-gray-900 transition-all duration-300">
              2
            </button>
            <button className="w-11 h-11 rounded-full bg-white text-gray-700 font-semibold border-2 border-gray-200 hover:border-gray-400 hover:text-gray-900 transition-all duration-300">
              3
            </button>
          </div>
          <button className="px-6 py-2.5 rounded-full bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-400 hover:text-gray-800 transition-all duration-300 font-medium shadow-sm hover:shadow-md">
            Next
          </button>
        </div>
      </div>

      {/* Newsletter Section (Optional) */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-300 text-lg mb-8">
            Get the latest beauty tips and wellness advice delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-500 shadow-lg"
            />
            <button className="px-8 py-4 bg-rose-500 text-white rounded-full font-semibold hover:bg-rose-600 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;