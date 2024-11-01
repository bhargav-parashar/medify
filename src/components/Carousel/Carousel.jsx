import React, { useRef, useState } from "react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



export default function Carousel({ children, slidesPerView = 1 }) {
  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        loop={true}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{
            clickable: true,
          }}
        className="mySwiper"
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
        style={{
            // border:"2px solid brown", 
            width:"90%"}}
      >
        {children.map((slide) => (
          <SwiperSlide
           key={slide.id}
            style={{
              width: "fit-content",
              //border: "2px solid violet ",
              display: "flex",
              justifyContent: "center",
              
            }}
          > 
            {slide}
           
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
