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

      {/* 1 Slide per view*/}
      <Box
        sx={{
          height: "fit-content",
          width: "100%",
          marginTop: {xs:"90px",sm:"85px",md:"140px"},
          display:{sm:"none"}
        }}
      >
        <Carousel
          
          slidesPerView={1}
          data={
            couponSlides.map((slide) => (
              <Box
                component="img"
                src={slide.img}
                alt={` ${slide.id}`}
                width={{xs:"270px",sm:"100%",}}
                style={{ marginBottom: "50px" }}
                
              />
           
          ))
        }
        />
      </Box>
      
       {/* 3 Slides per view*/}
       <Box
        sx={{
          height: "fit-content",
          width: "100%",
          marginTop: {xs:"90px",sm:"85px",md:"140px"},
          display:{xs:"none",sm:"block"}
        }}
      >
        <Carousel
          
          slidesPerView={3}
          data={
            couponSlides.map((slide) => (
              <Box
                component="img"
                src={slide.img}
                alt={` ${slide.id}`}
                width={{xs:"270px",sm:"100%",}}
                style={{ marginBottom: "50px" }}
              />
           
          ))
        }
        />
      </Box>
     
    </>
  );
};
export default CouponSection;
