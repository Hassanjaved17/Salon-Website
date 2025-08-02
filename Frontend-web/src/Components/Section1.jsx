import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';




const slideImages = [
  {
    url: '//dictate.webinane.com/wp-content/uploads/2025/01/slide-2-5.jpg',
  },
  {
    url: '//dictate.webinane.com/wp-content/uploads/2022/03/slide-1-1.jpg',
  },
  {
    url: '//dictate.webinane.com/wp-content/uploads/2024/03/ddd.jpg',
  },
];

const Slide = () => {
  return (
    <>
      <div className=" mx-auto ">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true} 
          effect="fade"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          speed={1000}
        >
          {slideImages.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center flex items-center justify-center  shadow-lg transition-all duration-500 ease-in-out
"
                style={{ backgroundImage: `url(${slide.url})` }}
              >
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slide;
