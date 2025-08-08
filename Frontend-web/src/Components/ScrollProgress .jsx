import React, { useEffect, useRef } from 'react';

const ScrollProgress = () => {
  const progressRef = useRef(null);
  const animationFrame = useRef(null);

  useEffect(() => {
    const updateProgressBar = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;

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

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[9999] bg-transparent">
      <div
        ref={progressRef}
        className="h-full origin-left bg-[#F6526D] transform transition-transform duration-75 ease-out"
        style={{ width: '100%', transform: 'scaleX(0)' }}
      ></div>
    </div>
  );
};

export default ScrollProgress;
