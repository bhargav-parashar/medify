import { Box, Typography } from "@mui/material";
import CenterCard from "../CenterCard/CenterCard";
import Advert from "../../assets/Images/advert-card.png";
import Verified from "../../assets/Images/verified.png";


const Booking = ({ data, state, city }) => {
  
  return (
    <Box
      
    >
      <Box
        sx={{
          // border: "2px solid black",
          width: { xs: "80%", md: "60%" },
          margin: {
            xs: "40vw auto 2vw auto",
            sm: "70px auto 2vw auto",
            md: "2vw 7vw 2vw 7vw",
            lg: "0.1vw 7vw 2vw 7vw",
          },
          display: data?"block":"none"
        }}
      >
        
        <Typography
          sx={{ fontWeight: "bold", fontSize: { xs: "2.4vw", sm: "1.5vw" } }}
        >
          {data.length} medical {data.length > 1 ? "centers" : "center"}{" "}
          available in 
          <Typography
            sx={{ fontSize: { xs: "2.4vw", sm: "1.5vw" }, fontWeight: "bold", display:"inline", textTransform:"capitalize" }}
          >
          {" "}
          {city}
          </Typography>
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "2px",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={Verified}
            sx={{
              height: { xs: "2vw", md: "1.2vw" },
              width: { xs: "2vw", md: "1.2vw" },
            }}
          />
          <Typography
            sx={{
              color: "#787887",
              fontSize: { xs: "1.7vw", sm: "1.2vw" },
              letterSpacing: 1,
            }}
          >
            Book appointments with minimum wait-time & verified doctor details
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "1.5vw",
          //border: "2px solid red",
        }}
      >
        <Box
          sx={{
            width: { xs: "80%", md: "60%" },
            display: "flex",
            flexDirection: "column",
            gap: "1.5vw",
          }}
        >
          {data.map((center) => (
            <CenterCard data={center} />
          ))}
        </Box>
        <Box
          component="img"
          src={Advert}
          alt="Advertisement"
          sx={{ height: "18vw", display: { xs: "none", md: "block" } }}
        />
      </Box>
    </Box>
  );
};
export default Booking;
