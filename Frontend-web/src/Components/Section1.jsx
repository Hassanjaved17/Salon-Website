import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slideImages = [
  { url: "/slider-images/slide1.jpg" },
  { url: "/slider-images/slide2.jpg" },
  { url: "/slider-images/slide3.jpg" },
];

const Slide = () => {
  return (
    <div className="mx-auto">
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        effect="fade"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
      >
        {slideImages.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center shadow-lg relative">
              <FadeInImage
                src={slide.url}
                alt={`Slide ${index + 1}`}
                eager={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const FadeInImage = ({ src, alt, eager = false }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      onLoad={() => setLoaded(true)}
      className={`w-full h-full object-cover transition-opacity duration-700 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    />
  );
};

export default Slide;
