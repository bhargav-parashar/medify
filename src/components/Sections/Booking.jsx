import { Box } from "@mui/material";
import CenterCard from "../CenterCard/CenterCard";
import advert from "../../assets/Images/advert-card.png";

const Booking = ({data}) => {
  return (
    <Box
      pt={{ xs: "39%", sm: "27%", md: "25%" }}
      sx={{
        background:"linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-start',
        gap:'1.5vw'
      }}
    > 
    <Box sx={{ width:{xs:"80%", md:"60%"}, display:'flex', flexDirection:'column', gap:'1.5vw'}}>
    {
      data.map((center)=><CenterCard data={center} />)
    }
    </Box>
      <Box
        component="img"
        src={advert}
        alt="advertisement"
        sx={{height:"18vw",display:{xs:'none',md:'block'}}}  
      />
    </Box>
  );
};
export default Booking;
