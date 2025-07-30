import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [

  "/client-1.webp",
  "/client-2.webp",
  "/client3.webp",
  "/client-4.webp",
  "/client-6.webp",
  "/client-1.webp",
  "/client-2.webp",
  "/client3.webp",
  "/client-4.webp",
  "/client-6.webp",
];

const HeroSliderSec7 = () => {
  return (
    <div className="w-full py-10 bg-white">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        grabCursor={true}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img
              src={logo}
              alt={`logo-${index}`}
              className="h-20 mx-auto object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSliderSec7;
