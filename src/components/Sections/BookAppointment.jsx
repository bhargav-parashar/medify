import react, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useMainContext } from "../../components/Context/MainContextProvider.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import { Box, Typography } from "@mui/material";
import CenterCard from "../Cards/CenterCard.jsx";
import Advert from "../../assets/Images/advert-card.png";
import Verified from "../../assets/Images/verified.png";

const BookAppointment = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState(searchParams.get("state"));
  const [city, setCity] = useState(searchParams.get("city"));
  const [centers, setCenters] = useState([]);
  const { selectedTab, setSelectedTab } = useMainContext();
  const [isLoading, setIsLoading] = useState(false);

  const slots = {
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };

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
          background:
            "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
          paddingBottom: "50px",
        }}
      >
        {isLoading && (
          <Box mt={{ xs: "40vh", sm: "15vh", md: "10vh" }}>
            {" "}
            <Loader />
          </Box>
        )}
        {!isLoading && centers.length > 0 && (
          <Box>
            <Box
              sx={{
                // border: "2px solid black",
                width: { xs: "80%", md: "60%" },
                margin: {
                  xs: "40vw auto 2vw auto",
                  sm: "70px auto 2vw auto",
                  md: "2vw 7vw 2vw 7vw",
                  lg: "0.1vw 7vw 2vw 7vw",
                },
                display: centers ? "block" : "none",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "2.4vw", sm: "1.5vw" },
                }}
              >
                {centers.length} medical {centers.length > 1 ? "centers" : "center"}{" "}
                available in
                <Typography
                  sx={{
                    fontSize: { xs: "2.4vw", sm: "1.5vw" },
                    fontWeight: "bold",
                    display: "inline",
                    textTransform: "capitalize",
                  }}
                >
                  {" "}
                  {city}
                </Typography>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "2px",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={Verified}
                  sx={{
                    height: { xs: "2vw", md: "1.2vw" },
                    width: { xs: "2vw", md: "1.2vw" },
                  }}
                />
                <Typography
                  sx={{
                    color: "#787887",
                    fontSize: { xs: "1.7vw", sm: "1.2vw" },
                    letterSpacing: 1,
                  }}
                >
                  Book appointments with minimum wait-time & verified doctor
                  details
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "1.5vw",
                //border: "2px solid red",
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
                {centers.map((center) => (
                  <CenterCard data={center} slots={slots} />
                ))}
              </Box>
              <Box
                component="img"
                src={Advert}
                alt="Advertisement"
                sx={{ height: "18vw", display: { xs: "none", md: "block" } }}
              />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};
export default BookAppointment;
