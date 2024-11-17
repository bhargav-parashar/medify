import { Box } from "@mui/material";
import prev from "../../assets/Images/prev.png";
import next from "../../assets/Images/next.png";
import { useSwiper } from "swiper/react";

export function PrevButton({ handleClick }) {
  const swiper = useSwiper();
  return (
    <Box
      sx={{
        cursor: "pointer",
        border: "1px solid lightGray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        backgroundColor:"white"
      }}
      height={{ xs: "4vw",sm:"3vw", md: "2.5vw" }}
      width={{ xs: "5vw",sm:"2.5vw", md: "2vw" }}
      onClick={() => swiper.slidePrev()}
    >
      <Box component="img" src={prev} alt="previous button" height="1vw" />
    </Box>
  );
}
export function Nextbutton({ handleClick }) {
  const swiper = useSwiper();
  return (
    <Box
      sx={{
        cursor: "pointer",
        border: "1px solid lightGray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        backgroundColor:"white"
      }}
      height={{ xs: "4vw",sm:"3vw", md: "2.5vw" }}
      width={{ xs: "5vw",sm:"2.5vw", md: "2vw" }}
      onClick={() => swiper.slideNext()}
    >
      <Box component="img" src={next} alt="previous button" height="1vw" />
    </Box>
  );
}
