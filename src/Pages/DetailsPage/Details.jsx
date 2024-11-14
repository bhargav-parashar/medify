import { Box } from "@mui/material";
import Faq from "../../components/Sections/Faq.jsx";
import Bookings from "../../components/Sections/Booking.jsx";
import { useSearchParams } from "react-router-dom";
import react, { useEffect, useState } from "react";
import axios from "axios";
import { useMainContext } from "../../components/Context/MainContextProvider.jsx";
import Loader from "../../components/Loader/Loader.jsx";

const Details = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState(searchParams.get("state"));
  const [city, setCity] = useState(searchParams.get("city"));
  const [centers, setCenters] = useState([]);
  const { selectedTab, setSelectedTab } = useMainContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCenters = async () => {
      setCenters([]);
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
        );
        setCenters(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    if (state && city) {
      getCenters();
    }
  }, [state, city]);

  useEffect(() => {
    setCity(searchParams.get("city"));
    setState(searchParams.get("state"));

    setSelectedTab(2);
  }, [searchParams]);

  return (
    <Box>

      <Box
        pt={{ xs: "39%", sm: "27%", md: "25%" }}
        sx={{
        background:"linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
        paddingBottom: "50px"
      }}
    >
      {isLoading && (
        <Box 
        mt={{xs:"40vh", sm:"15vh",md:"10vh"}}
        
        > <Loader/></Box>
      )}
      {!isLoading && centers.length>0 && <Bookings data={centers} state={state} city={city} />}
      
    </Box>
    <Faq />
    </Box>
  );
};
export default Details;
