import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Tabs = ({handleClick,selectedTab}) => {

  const selected = { 
    color:"primary.main",
    fontWeight:"bold",
    fontSize:"0.5vw"
  };
  const unSelected = { 
    color:"primary.dark",
    fontSize:"0.5vw"
  };
  return (  
    <Box sx={{ display: "flex", gap: "3vw" }}>

      <Link to="/" style={{textDecoration:'none'}}><Typography id={1} sx={selectedTab === 1 ? selected : unSelected} onClick={()=>handleClick(1)} >Find Doctors</Typography></Link>
      <Link to="/search" style={{textDecoration:'none'}}><Typography id={2} sx={selectedTab === 2 ? selected : unSelected} onClick={()=>handleClick(2)} >Hospitals</Typography></Link>
      <Link to="/medicines" style={{textDecoration:'none'}}><Typography id={3} sx={selectedTab === 3 ? selected : unSelected} onClick={()=>handleClick(3)} >Medicines</Typography></Link>
      <Link to="/surgeries" style={{textDecoration:'none'}}><Typography id={4} sx={selectedTab === 4 ? selected : unSelected} onClick={()=>handleClick(4)} >Surgeries</Typography></Link>
      <Link to="/software" style={{textDecoration:'none'}}><Typography id={5} sx={selectedTab === 5 ? selected : unSelected} onClick={()=>handleClick(5)} >Software for Provider</Typography></Link>
      <Link to="/facilities" style={{textDecoration:'none'}}><Typography id={6} sx={selectedTab === 6 ? selected : unSelected} onClick={()=>handleClick(6)} >Facilities</Typography></Link>
    </Box>
  );
};
export default Tabs;
