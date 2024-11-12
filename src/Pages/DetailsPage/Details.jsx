import { Box } from "@mui/material";
import Faq from "../../components/Sections/Faq.jsx";
import Bookings from "../../components/Sections/Booking.jsx";
import { useSearchParams } from "react-router-dom";  
import react,{useEffect, useState} from 'react';
import axios from 'axios';

const Details = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state,setState] = useState(searchParams.get("state"));
  const [city,setCity] = useState(searchParams.get("city"));
  const [centers,setCenters] = useState([]);
  
  useEffect(()=>{
    const getCenters = async ()=>{
      try{
        const response = await axios.get(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
        setCenters(response.data);
        
      }catch(err){
        console.log(err);
      }
    };
    if(state && city){
      getCenters();
    }
  },[state,city]);

  return (
    <Box>
      <Bookings data={centers}/>
      <Faq/>
    </Box>
  );
};
export default Details;
