import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel({ data, slidesPerView = 1, spaceBetween=30 }) {
  return (
    <>
      <Swiper
      centeredSlides={true}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop= {true}
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
        {data.map((slide) => (
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
