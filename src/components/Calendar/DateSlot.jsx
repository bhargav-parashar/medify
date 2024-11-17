import { Box} from "@mui/material";
import DateSlider from "../Carousel/DateSlider";

const DateSlot = ({ slots, totalSlots,selectedDate, setSelectedDate }) => {
  return (
    <>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
       
        <DateSlider
          slidesPerView={3}
          spaceBetween={0}
          totalSlots={totalSlots}
          selectedDate={selectedDate}
          setSelectedDate ={setSelectedDate}
        />
      </Box>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <DateSlider
          slidesPerView={3}
          spaceBetween={0}
          totalSlots={totalSlots}
          selectedDate={selectedDate}
          setSelectedDate ={setSelectedDate}
        />
      </Box>
    </>
  );
};
export default DateSlot;
