import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Header from "../../components/Header/Header.jsx";
import CenterCard from "../../components/Cards/CenterCard.jsx";
import Advert from "../../assets/Images/advert-card.png";
import emptyFile from "../../assets/Images/empty-folder.svg";

const Details = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const existingBookings = localStorage.getItem("bookings") || [];
    if(existingBookings.length>0){
    setBookings(JSON.parse(existingBookings).reverse());
    setFilteredList(JSON.parse(existingBookings).reverse());
    }
  }, []);

  return (
    <Box>
      <Header
        isForBooking={true}
        bookings={bookings}
        setFilteredList={setFilteredList}
      />
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "1.5vw",
            background:
              "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",

            padding: { xs: "28vw 0vw", sm:"18vw 0vw", md:"12vw 0vw", lg: "9vw 0vw" },
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
            {filteredList.length > 0 ? (
              filteredList.map((item, idx) => (
                <CenterCard key={idx} data={item} isForBooking />
              ))
            ) : (
              <Box
                sx={{

                  marginTop:{xs:"15vw", sm:"8vw", md:"1vw"} ,
                  display: "flex",
                  border: "2px solid gray",
                  borderRadius: "3px",
                  justifyContent: "center",
                  alignItems: "center",
                  padding:"4vw" ,
                }}
              >
                <Box
                component="Img"
                src={emptyFile}
                alt="empty-file"
                sx={{
                  height:{xs:"12vw", sm:"8vw", md:"5vw"} ,
                 
                  opacity:"0.2"
                }}
                />
                <Typography color="gray" sx={{marginLeft:"5px"}} >No Bookings Found</Typography>
              </Box>
            )}
          </Box>
          {
            filteredList.length >0 && (
              <Box
                component="img"
                src={Advert}
                alt="Advertisement"
                sx={{ height: "18vw", display: { xs: "none", md: "block" } }}
          />
            )
          }
          
        </Box>
      </Box>
    </Box>
  );
};
export default Details;
