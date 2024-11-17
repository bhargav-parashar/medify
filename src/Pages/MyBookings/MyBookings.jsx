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
      <Header isForBooking={true}  bookings={bookings} setFilteredList={setFilteredList} />
      <Box>
           

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "1.5vw",
                background:"linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
                //border: "2px solid red",
                padding:{xs:"18vw 0vw", lg:"9vw 0vw"}  
              }}
            >
              <Box
                sx={{
                  width: { xs: "80%", md: "60%" },
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5vw",
                  //border:"2px solid green"
                }}
              >
                {
                  
                  filteredList.length ? (filteredList.map((item, idx) => <CenterCard key={idx} data={item} isForBooking />))
                  : (bookings.map((item, idx) => <CenterCard key={idx} data={item} isForBooking />))
                 
                }
              </Box>
              <Box
                component="img"
                src={Advert}
                alt="Advertisement"
                sx={{ height: "18vw", display: { xs: "none", md: "block" } }}
              />
            </Box>
          </Box>

          


      
    </Box>
  );
};
export default Details;
