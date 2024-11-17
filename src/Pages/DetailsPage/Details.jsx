import React,{useState} from "react";
import { Box } from "@mui/material";
import Faq from "../../components/Sections/Faq.jsx";
import BookAppointment from "../../components/Sections/BookAppointment.jsx";
import Header from "../../components/Header/Header.jsx";

const Details = () => {
  
  return (
    <Box>
      <Header/>
      <BookAppointment />
      <Faq />
    </Box>
  );
};
export default Details;
