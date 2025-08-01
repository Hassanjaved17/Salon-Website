import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = `${(totalScroll / windowHeight) * 100}`;
    setScrollWidth(scroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[9999] bg-transparent">
      <div
        className="h-full bg-[#F6526D] transition-all duration-100 ease-out"
        style={{ width: `${scrollWidth}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgress;
