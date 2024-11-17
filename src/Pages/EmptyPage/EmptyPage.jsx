import React from "react";
import { Box } from "@mui/material";
import Faq from "../../components/Sections/Faq.jsx";
import Header from "../../components/Header/Header.jsx";
import surgeries from "../../assets/Images/drugstore-card.png";
import capsule from "../../assets/Images/capsule-card.png";
import ambulance from "../../assets/Images/ambulance-card.png";
import facilities from "../../assets/Images/hospital-card.png";
import { useMainContext } from "../../components/Context/MainContextProvider.jsx";

const EmptyPage = () => {
    const { selectedTab} = useMainContext();
  return (
    <Box>
      <Header/>
      <Box
        pt={{ xs: "10%", sm: "10%", md: "10%" }}
        sx={{
          background:
            "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
          paddingBottom: "50px",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}
      >
        {
        selectedTab === 3 && (
            <Box
            component="img"
            src={capsule}
        />
        )
        }
        
        {
        selectedTab === 4 && (
            <Box
            component="img"
            src={surgeries}
        />
        )
      }
      {
        selectedTab === 5 && (
            <Box
            component="img"
            src={ambulance}
        />
        )
      }
      {
        selectedTab === 6 && (
            <Box
            component="img"
            src={facilities}
        />
        )
      }

       
      </Box>
      <Faq />
    </Box>
  );
};
export default EmptyPage;
