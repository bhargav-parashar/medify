import { Box, Typography } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import DocCard from "../Cards/DoctorCard";
import doctorHeena from "../../assets/Images/doctor-heena.png"
import doctorAnkur from "../../assets/Images/doctor-ankur.png"
import doctorAhmad from "../../assets/Images/doctor-ahmad.png"
import doctorStevens from "../../assets/Images/doctor-ahmad-stevens.png";
import doctorLesley from "../../assets/Images/doctor-lesley.png";

const cards = [
  {
      id:"1",
      name:"Dr Heena Sachdeva",
      dept:"Orthopedics",
      img:doctorHeena  
  },
  {
      id:"2",
      name:"Dr Ankur Sharma",
      dept:"Medicine",
      img:doctorAnkur  
  },
  {
      id:"3",
      name:"Dr Ahmad Stevens",
      dept:"Neurologist",
      img:doctorStevens  
  } ,
  {
      id:4,
      name:"Dr Lesley Hull",
      dept:"Medicine",
      img:doctorLesley  
  },
  {
      id:5,
      name:"Dr Ahmad Khan",
      dept:"Neurologist",
      img:doctorAhmad  
  },
  {
      id:6,
      name:"Dr Heena Sachdeva",
      dept:"Orthopedics",
      img:doctorHeena
  },
  {
      id:7,
      name:"Dr Lesley Hull",
      dept:"Medicine",
      img:doctorLesley  
  },
  {
      id:8,
      name:"Dr Ahmad Khan",
      dept:"Neurologist",
      img:doctorAhmad  
  }  
];

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

      {/* Medium screen */}
      <Box sx={{mt:"20px", display:{xs:"none",md:"block"} }}>
        <Carousel slidesPerView={4}  spaceBetween={40} data={cards.map((slide) => <DocCard key={slide.id} data={slide} /> )} />
      </Box>

      
      {/* Small screen */}
      <Box sx={{mt:"20px", display:{xs:"none",sm:"block",md:"none"} }}>
        <Carousel slidesPerView={3}  spaceBetween={30} data={cards.map((slide) => <DocCard key={slide.id} data={slide} /> )} />
      </Box>


       {/* Extra small screen */}
      <Box sx={{mt:"20px", display:{xs:"block",sm:"none"} }}>
        <Carousel slidesPerView={2}  spaceBetween={10} data={cards.map((slide) => <DocCard key={slide.id} data={slide} /> )} />
      </Box>

     </Box>
  );

  
};
export default Doctors;
