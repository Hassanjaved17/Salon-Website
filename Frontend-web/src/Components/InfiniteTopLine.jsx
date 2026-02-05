import React from 'react';

const InfiniteTopLoader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-1 overflow-hidden z-[99999] pointer-events-none bg-transparent">
      {/* Main loader bar */}
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg"
        style={{
          animation: 'loader-slide 5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
          filter: 'blur(0.5px)',
        }}
      ></div>

      {/* Glow effect layer */}
      <div
        className="absolute top-0 left-0 h-full bg-[#A6A6A6] opacity-50"
        style={{
          animation: 'loader-slide 5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
          animationDelay: '0.1s',
          filter: 'blur(4px)',
        }}
      ></div>

      {/* Shimmer effect */}
      <div
        className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
        style={{
          animation: 'shimmer 8s ease-in-out infinite',
        }}
      ></div>

      {/* Inline keyframes */}
      <style>
        {`
          /* Smooth slide animation with dynamic width */
          @keyframes loader-slide {
            0% {
              transform: translateX(-100%) scaleX(0);
              opacity: 0;
            }
            20% {
              transform: translateX(-60%) scaleX(0);
              opacity: 1;
            }
            50% {
              transform: translateX(0%) scaleX(1);
              opacity: 1;
            }
            80% {
              transform: translateX(60%) scaleX(0.4);
              opacity: 1;
            }
            100% {
              transform: translateX(100%) scaleX(0);
              opacity: 0;
            }
          }

          /* Shimmer effect for extra smoothness */
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default InfiniteTopLoader;