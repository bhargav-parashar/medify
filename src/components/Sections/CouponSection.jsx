import react from "react";
import { Box } from "@mui/material";
import Carousel from "../Carousel/Carousel.jsx";
import Coupon1 from "../../assets/Images/offer1.png";
import Coupon2 from "../../assets/Images/offer2.png";

const couponSlides = [
  {
    id: 1,
    img:Coupon1
  },
  {
    id: 2,
    img: Coupon2
  },
  {
    id: 3,
    img: Coupon1
  },
  {
    id: 4,
    img: Coupon2
  }
];

const CouponSection = () => {
  return (
    <>
      {/* Extra Small screen*/}
      <Box
        sx={{
          height: "fit-content",
          width: "100%",
          marginTop: "90px",
          display: { xs: "block", sm: "none" },
        }}
      >
        <Carousel
          
          slidesPerView={1}
          data={
            couponSlides.map((slide) => (
            <img
              src={slide.img}
              alt={` ${slide.id}`}
              width="270px"
              style={{ marginBottom: "50px" }}
            />
          ))
        }
        />
      </Box>

      {/* Small screen*/}
      <Box
        sx={{
          height: "fit-content",
          width: "100%",
          marginTop: "85px",
          display: { xs: "none", sm: "block", md: "none" },
          //border:"2px solid red"
        }}
      >
        <Carousel slidesPerView={3} 
          data={couponSlides.map((slide) => (
            <img
              key={slide.id}
              src={slide.img}
              alt={` ${slide.id}`}
              width="100%"
              style={{ marginBottom: "50px" }}
            />
          ))}
          />
      </Box>

      {/* Medium screen*/}
      <Box
        sx={{
          height: "fit-content",
          width: "100%",
          marginTop: "140px",
          display: { xs: "none", md: "block", lg: "none" },
        }}
      >
       

        <Carousel slidesPerView={3}
          data={couponSlides.map((slide) => (
            <img
              src={slide.img}
              alt={` ${slide.id}`}
              width="100%"
              style={{ marginBottom: "50px" }}
            />
          ))}
        />
      </Box>

      {/* Large screen*/}
      <Box
        sx={{
          height: "fit-content",
          width: "100%",
          marginTop: "140px",
          display: { xs: "none", lg: "block" },
          //border:"2px solid magenta"
        }}
      >
        <Carousel slidesPerView={3}
          data={couponSlides.map((slide) => (
            <img
              src={slide.img}
              alt={` ${slide.id}`}
              width="100%"
              style={{ marginBottom: "50px" }}
            />
          ))}/>
       
      </Box>
    </>
  );
};
export default CouponSection;
