import React, { useEffect, useRef } from 'react';

const ScrollProgress = () => {
  const progressRef = useRef(null);
  const animationFrame = useRef(null);

  useEffect(() => {
    const updateProgressBar = () => {
      const scrollTop = window.scrollY; 
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      let scrollPercent = 0;
      if (scrollHeight > 0) {
        scrollPercent = (scrollTop / scrollHeight) * 100;
      }

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${scrollPercent / 100})`;
      }  

      animationFrame.current = null;
    };

    const handleScroll = () => {
      if (!animationFrame.current) {
        animationFrame.current = requestAnimationFrame(updateProgressBar);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateProgressBar); // ✅ updates if screen size changes
    updateProgressBar(); // ✅ run once on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateProgressBar);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[99999] bg-transparent pointer-events-none">
      <div
        ref={progressRef}
        className="h-full origin-left bg-[#F6526D] transform transition-transform duration-75 ease-out"
        style={{ width: '100%', transform: 'scaleX(0)' }}
      ></div>
    </div>
  );
};

export default ScrollProgress;
