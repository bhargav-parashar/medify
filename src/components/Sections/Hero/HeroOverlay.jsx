import react, { useState,useContext } from "react";
import styles from "./HeroOverlay.module.css";
import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
import SearchLayout from "../../Searchbar/SearchLayout.jsx";
import TextCard from "../../Cards/TextCard.jsx";
import doctorCard from "../../../assets/Images/doctor-card.png";
import labCard from "../../../assets/Images/drugstore-card.png";
import hospitalCard from "../../../assets/Images/hospital-card.png";
import capsuleCard from "../../../assets/Images/capsule-card.png";
import ambulanceCard from "../../../assets/Images/ambulance-card.png";
import {SelectedTabContext } from "../../Context/SelectedTabContext.jsx";

const cards = [
  {
    id: 1,
    image: doctorCard,
    label: "Doctors",
  },
  {
    id: 2,
    image: labCard,
    label: "Labs",
  },
  {
    id: 3,
    image: hospitalCard,
    label: "Hospitals",
  },
  {
    id: 4,
    image: capsuleCard,
    label: "Medical store",
  },
  {
    id: 5,
    image: ambulanceCard,
    label: "Ambulance",
  },
];

const HeroOverlay = () => {
  
  const [selectedCard, setSelectedCard] = useState(3);
  const handleClick = (id) => {
    setSelectedCard(id);
  };
  return (
    <Box className={styles.heroOverlay}>
      <SearchLayout />
    <Typography
        variant="subtitle1"
        sx={{
          color: "#102851",
          fontSize: { xs: "10px", sm: "15px", md: "15px " },
          lineHeight: "1.5",
          display: "flex",
          justifyContent: "center",
          fontWeight: "600",
        }}
      >
        You maybe looking for
      </Typography>

      <Box
        sx={{
          //border: "2px solid green",
          margin: {
            xs: "10px 20px 20px 20px",
            sm: "5px 20px 20px 20px",
            md: "10px 20px 20px 20px",
          },
          width: { xs: "81%", md: "95%" },
          height: "40%",
        }}
      >
        <Grid
          container
          rowSpacing={{ xs: 1, md: 2 }}
          columnSpacing={{ xs: 1, md: 2 }}
          justifyContent={"center"}
          height="100%"
        >
          {cards.map((card) => (
            <Grid  key={card.id} item size={{ xs: 4, md: 2.4 }}>
              <TextCard
                key={card.id}
                id={card.id}
                img={card.image}
                label={card.label}
                cardHeight="100%"
                cardWidth="100%"
                selected={selectedCard}
                handleClick={handleClick}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
export default HeroOverlay;
