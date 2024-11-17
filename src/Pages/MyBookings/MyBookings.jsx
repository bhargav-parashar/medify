import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header/Header.jsx";
import CenterCard from "../../components/Cards/CenterCard.jsx";
import Advert from "../../assets/Images/advert-card.png";

const Details = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const existingBookings = localStorage.getItem("bookings") || [];
    setBookings(JSON.parse(existingBookings));
  }, []);
  return (
    <Box>
      <Header isForBooking={true} searchItem />
      <Box>
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
              
              }}
            >
              
              
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
                {bookings.map((item, idx) => <CenterCard key={idx} data={item} />)}
              </Box>
              <Box
                component="img"
                src={Advert}
                alt="Advertisement"
                sx={{ height: "18vw", display: { xs: "none", md: "block" } }}
              />
            </Box>
          </Box>

          <Box
        pt={{ xs: "5%", sm: "10%", md: "10%" }}
        sx={{
          background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))",
          paddingBottom: "50px",
        }}
      >
        {bookings.map((item, idx) => <CenterCard key={idx} data={item} />)}
      </Box>


      
    </Box>
  );
};
export default Details;
