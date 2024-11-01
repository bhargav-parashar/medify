import react from "react";
import { Box } from "@mui/material";
import Carousel from "../Carousel/Carousel.jsx";
import CouponImg1 from "../../assets/Images/CouponImg1.svg";
import CouponImg2 from "../../assets/Images/CouponImg2.svg";

const couponSlides = [
  {
    id: 1,
    img: CouponImg1,
  },
  {
    id: 2,
    img: CouponImg2,
  },
  {
    id: 3,
    img: CouponImg1,
  },
  {
    id: 4,
    img: CouponImg2,
  },
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
        <Carousel slidesPerView={1}>
          {couponSlides.map((slide) => (
            <img src={slide.img} alt={` ${slide.id}`} width="270px" style={{marginBottom:"50px"}} />
          ))}
        </Carousel>
      </Box>

        {/* Small screen*/}
        <Box
        sx={{
          height: "fit-content",
          width: "100%",
          marginTop: "85px",
          display: { xs: "none", sm:"block" , md: "none" },
        }}
      >
        <Carousel slidesPerView={2}>
          {couponSlides.map((slide) => (
            
            <img key={slide.id} src={slide.img} alt={` ${slide.id}`} width="100%" style={{marginBottom:"50px"}} />
          ))}
        </Carousel>
      </Box>

      {/* Medium screen*/}
      <Box
        sx={{
          height: "fit-content",
          width: "100%",
          marginTop:  "140px" ,
          display: { xs: "none", md: "block", lg:"none" },
        }}
      >
        <Carousel slidesPerView={3}>
          {couponSlides.map((slide) => (
            
            <img src={slide.img} alt={` ${slide.id}`}  width="100%" style={{marginBottom:"50px"}} />
            
          ))}
        </Carousel>
      </Box>

      {/* Large screen*/}
      <Box
        sx={{
          height: "fit-content",
          width: "100%",
          marginTop: "140px" ,
          display: { xs: "none", lg: "block" },
          //border:"2px solid magenta"
        }}
      >
        <Carousel slidesPerView={3}>
          {couponSlides.map((slide) => (
            <img src={slide.img} alt={` ${slide.id}`} width="100%" style={{marginBottom:"50px"}}   />
          ))}
        </Carousel>
      </Box>
      
    </>
  );
};
export default CouponSection;
