import { Box, Typography, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { format, add, isEqual, startOfDay } from "date-fns";
import { PrevButton, Nextbutton } from "../Calendar/SliderButtons";

const DateSlider = ({ slidesPerView = 3, spaceBetween = 0, totalSlots, selectedDate, setSelectedDate }) => {
  const dates = [];
  const today = startOfDay(new Date());

  for (let i = 0; i < 7; i++) {
    dates.push(add(today, { days: i }));
  }

  const formatDate = (day) => {
    if (isEqual(today, day)) return "Today";
    else if (isEqual(add(today, { days: 1 }), day)) return "Tomorrow";
    else return format(day, "E, d MMM");
  };
  const handleClick =(date)=>{
    setSelectedDate(date);
  }
  return (
    <>
      <Swiper
        style={{ width: "100%", display: "flex", flexDirection:"column" }}
        slidesPerView={slidesPerView}
        loop={false}
        spaceBetween={spaceBetween}
      >
        <Box sx={{ zIndex: "100", position: "absolute", left: "0%", top:{xs:"20%",sm:"10%"} }}>
         
          <PrevButton />
        </Box>
        {dates.map((date, idx) => (
          <SwiperSlide
            key={idx}
            style={{
              
              width: "fit-content",
              
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                cursor:"pointer"
              }}
              onClick={()=>handleClick(date)}
            >
              <Typography fontSize={{ xs: 9, md: 11 }} sx={{fontWeight:isEqual(selectedDate,date)? "bold":""}}>
                {formatDate(date)}
              </Typography>
              <Typography
                fontSize={{ xs: 7, md: 9 }}
                color="#00A500"
              >{`${totalSlots} Slots Available`}</Typography>
              <Box
                height={{ xs: "4px", md: "5px" }}
                width={{ xs: 1, md: "100%" }}
                position="relative"
                bottom="0"
                bgcolor={isEqual(date, selectedDate) ? "primary.main" : "lightGray"}
                left={0}
                zIndex={999}
                mt="5px"
                mx="auto"
              ></Box>
            </Box>
          </SwiperSlide>
        ))}
        

        <Box sx={{ zIndex: "100", position: "absolute", right: "0%",top:{xs:"20%",sm:"10%"} }}>
          
          <Nextbutton />
        </Box>
      </Swiper>
    </>
  );
};
export default DateSlider;
