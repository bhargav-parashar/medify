import Header from "../../components/Header/Header";
import { Box } from "@mui/material";
import Faq from "../../components/Sections/Faq.jsx";
import Bookings from "../../components/Sections/Booking.jsx";
  
const Details = () => {
  return (
    <Box>
      {/* <Header detailsPage/> */}
      <Bookings/>
      <Faq/>
    </Box>
  );
};
export default Details;
