import { Box, Typography } from "@mui/material";
import ButtonPrimary from "../Buttons/ButtonPrimary";

const TimeSlot = ({ slots }) => {
  const hours = Object.entries(slots).map((entry) => entry[0]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {hours.map((hour) => (
        <Box
          sx={{
            display: "flex",
            borderTop: "1px solid lightGray",
            padding:{xs:"3vw 4vw 3vw 4vw",sm:"1.5vw 3vw 1.5vw 3vw"} ,
            justifyContent: "flex-start",
            gap: {xs:"5vw",sm:"2.5vw"},
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "15%" }}>
            <Typography
              sx={{
                fontSize:{xs:"2.5vw",sm:"1.1vw"},
                fontColor: "secondary.alternateDarkGray",
                textTransform:"capitalize"
              }}
            >
              {hour}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              gap: "1.2vw",
              width: "100%",
            }}
          >
            {slots[hour].map((slot) => (
              <ButtonPrimary
                label={slot}
                variant="outlined"
                color="primary.main"
                border="0.1vw solid"
                width="fit-content"
                height="fit-content"
                fontSize={{xs:"2.5vw",sm:"1.1vw"}}
                padding="0.3vw 0.5vw"
              />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
export default TimeSlot;
