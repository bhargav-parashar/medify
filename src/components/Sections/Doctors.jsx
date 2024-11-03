import { Box, Typography } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import cards from "../../data/doctors.json";
import DocCard from "../Cards/DoctorCard";

const Doctors = () => {
  return (
    <Box
      sx={{
        paddingBottom: "40px",
        //border:"2px solid blue",

      }}
    >
      <Box sx={{display:"flex",justifyContent:"center"}}>
      <Typography
        sx={{
          marginTop: { xs: "25px", sm: "30px", md: "38px" },
          fontWeight: "700",
          color: 'primary.dark',
          fontSize: { xs: "25px", sm: "30px", md: "33px" },
          letterSpacing: "0.1px",
          lineHeight: "67px",
        }}
      >
        Our Medical Specialists
      </Typography>
      </Box>
      {/* Extra small screen */}
      <Box sx={{mt:"20px", display:{xs:"none",md:"block"} }}>
        <Carousel slidesPerView={4}  spaceBetween={40} data={cards.map((slide) => <DocCard data={slide} /> )} />
      </Box>
      {/* Small screen */}
      <Box sx={{mt:"20px", display:{xs:"none",sm:"block",md:"none"} }}>
        <Carousel slidesPerView={3}  spaceBetween={30} data={cards.map((slide) => <DocCard data={slide} /> )} />
      </Box>
       {/* Medium+ screen */}
      <Box sx={{mt:"20px", display:{xs:"block",sm:"none"} }}>
        <Carousel slidesPerView={2}  spaceBetween={10} data={cards.map((slide) => <DocCard data={slide} /> )} />
      </Box>
    </Box>
  );

  
};
export default Doctors;
