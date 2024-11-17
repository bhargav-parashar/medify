import { Box, Typography } from "@mui/material";
import react, { useState } from "react";
import Prime from "../../assets/Images/prime-badge.png";
import Image from "../../assets/Images/center-card.png";
import ThumbsUp from "../../assets/Images/thumbsUp.png";
import Button from "../Buttons/ButtonPrimary.jsx";
import Calendar from "../Calendar/Calendar.jsx";
import { format } from "date-fns";

const CenterCard = ({ data, slots, handleBooking, isForBooking }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const handleclick = () => {
    setShowCalendar((prev) => !prev);
  };
  return (
    <Box
      sx={{
        //border:"2px solid red",
        borderRadius: "10px",
        backgroundColor: "secondary.white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          //border:"2px solid green",
          borderRadius: "10px",
          height: "18vw",
          boxSizing: "border-box",
          padding: "2% 3% 3% 3%",
        }}
      >
        <Box
          sx={{
            //border: "2px solid red",
            height: "100%",
            backgroundColor: "secondary.white",
            width: "20%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            padding: "1% 1% 5% 1%",
          }}
        >
          <Box
            sx={{
              height: "9vw",
              background: "#8CCFFF",
              width: "9vw",
              borderRadius: "50%",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={Prime}
              alt="Prime-logo"
              sx={{
                position: "absolute",
                right: "-3%",
                bottom: "18%",
                height: "1.7vw",
                width: "1.7vw",
              }}
            />
            <Box
              component="img"
              src={Image}
              alt="Center"
              sx={{
                height: "5.5vw",
                width: "5.5vw",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            //border: "2px solid blue",
            height: "100%",
            backgroundColor: "secondary.white",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            boxSizing: "border-box",
            padding: { xs: "1.2vw 1vw 0vw 1vw", sm: "2.5vw 1vw 0vw 1vw" },
          }}
        >
          <Box>
            <Typography
              sx={{
                textTransform: "capitalize",
                color: "#14BEF0",
                fontSize: "1.4vw",
                fontWeight: "bold",
                letterSpacing: 1.2,
              }}
            >
              {data["Hospital Name"].toLowerCase()}
            </Typography>
          </Box>
          <Typography
            sx={{
              textTransform: "capitalize",
              color: "#414146",
              fontWeight: "bold",
              fontSize: "1.1vw",
              marginTop: "1vw",
            }}
          >{`${data["City"].toLowerCase()}, ${data[
            "State"
          ].toLowerCase()}`}</Typography>
          <Typography
            sx={{ textTransform: "capitalize", fontSize: "1vw", lineHeight: 1 }}
          >{`${data["Hospital Type"].toLowerCase()}, ${data[
            "Address"
          ].toLowerCase()}, ${data["ZIP Code"]}.`}</Typography>

          <p
            style={{
              fontSize: "1vw",
              borderBottom: "0.2vw dashed lightGray",
              paddingBottom: "1vw",
              margin: { xs: "0.5vw 0vw 0vw 0vw", md: "1.5vw 0vw 0vw 0vw" },
            }}
          >
            <span style={{ fontWeight: "bold", color: "#00A500" }}>FREE </span>
            <strike style={{ color: " #787887" }}>₹ 500</strike>
            <span> Consultation fee at clinic</span>
          </p>

          {data["Hospital overall rating"] !== "Not Available" ? (
            <Box
              sx={{
                backgroundColor: "#00A500",
                height: "1.5vw",
                width: "2.5vw",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                marginTop: "0.8vw",
              }}
            >
              <Box
                component="img"
                src={ThumbsUp}
                alt="thumbs up"
                sx={{
                  height: "1vw",
                  width: "1vw",
                }}
              />
              {data["Hospital overall rating"] !== "Not Available" && (
                <Typography
                  sx={{
                    textTransform: "none",
                    color: "secondary.white",
                    fontSize: "1.1vw",
                  }}
                >{`${data["Hospital overall rating"]}`}</Typography>
              )}
            </Box>
          ) : (
            <Box
              sx={{
                backgroundColor: "transparent",
                height: "1.5vw",
                width: "2.5vw",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                marginTop: "0.8vw",
              }}
            ></Box>
          )}
        </Box>
        {isForBooking ? (
          <Box
            sx={{
              //border: "2px solid green",
              height: "100%",
              backgroundColor: "secondary.white",
              width: "30%",
              display: "flex",
              //flexDirection:"column",
              alignItems: "flex-start",
              justifyContent: "space-evenly",
              gap: "1.2vw",
              padding: { xs: "0.9vw 0vw", sm: "2.1vw 0vw" },
            }}
          >
            <Box
              sx={{
                border: "2px solid",
                borderColor: "primary.main",
                borderRadius: "3px",
                padding: "0.4vw",
                minWidth:"40%",
                textAlign:"center"
              }}
            >
              <Typography sx={{ fontSize: "1vw", color: "primary.main" }}>
                {data.bookingTime}
              </Typography>
            </Box>
            <Box
              sx={{
                border: "2px solid",
                borderColor: "#00A500",
                borderRadius: "3px",
                padding: "0.4vw",
                minWidth:"40%",
                textAlign:"center"
              }}
            >
              <Typography sx={{ fontSize: "1vw", color: "#00A500" }}>
                {format(data.bookingDate, "E, d MMM")}
              </Typography>
            </Box>

           
          </Box>
        ) : (
          <Box
            sx={{
              //border: "2px solid green",
              height: "100%",
              backgroundColor: "secondary.white",
              width: "30%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "1.2vw",
            }}
          >
            <Typography
              sx={{
                textTransform: "capitalize",
                fontSize: "1vw",
                lineHeight: 1,
                color: "#00A500",
                fontWeight: "bold",
              }}
            >
              Available Today
            </Typography>
            <Button
              handleclick={handleclick}
              width="100%"
              height={{ xs: "2vw", md: "3vw" }}
              fontSize="1vw"
              label={showCalendar ? "Hide Calendar" : "Book FREE Center Visit"}
            />
          </Box>
        )}
      </Box>
      {showCalendar && (
        <Box
          sx={{
            //border:"2px solid lightGray",
            boxSizing: "border-box",
            padding: "2% 3% 3% 3%",
          }}
        >
          <Calendar
            slots={slots}
            details={data}
            handleBooking={handleBooking}
          />
        </Box>
      )}
    </Box>
  );
};
export default CenterCard;
