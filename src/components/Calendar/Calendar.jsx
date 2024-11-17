import React,{useState} from 'react';
import TimeSlot from "./TimeSlot";
import DateSlot from "./DateSlot";
import { startOfDay } from "date-fns";

const Calendar = ({slots,details,handleBooking})=>{
    const totalSlots = slots.morning.length + slots.afternoon.length + slots.evening.length;
    const [selectedDate,setSelectedDate] = useState(startOfDay(new Date()));
    
    return(
        <>
            <DateSlot totalSlots={totalSlots} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
            <TimeSlot slots={slots} details={details} handleBooking={handleBooking} selectedDate={selectedDate} />
        </>
    )
}
export default Calendar;