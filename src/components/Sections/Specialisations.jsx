import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TextCard from "../Cards/TextCard.jsx";
import Button from "../../components/Buttons/ButtonPrimary.jsx";
import labCard from "../../assets/Images/drugstore-card.png";
import primaryCare from "../../assets/Images/primary-care.png";
import cardiology from "../../assets/Images/cardiology.png";
import mri from "../../assets/Images/mri.png";
import testTube from "../../assets/Images/test-tube.png";
import shield from "../../assets/Images/shield.png";
import xRay from "../../assets/Images/x-ray.png";

const cards =[
  {
    id: 1,
    img: labCard,
    label: "Dentistry"
  },
  {
    id: 2,
    img: primaryCare,
    label: "Primary care"
  },
  {
    id: 3,
    img: cardiology,
    label: "Cardiology"
  },
  {
    id: 4,
    img: mri,
    label: "MRI Resonance"
  },
  {
    id: 5,
    img: testTube,
    label: "Blood Test"
  },
  {
    id: 6,
    img: shield,
    label: "Psychology"
  },
  {
    id: 7,
    img: labCard,
    label: "Laboratory"
  },
  {
    id: 8,
    img: xRay,
    label: "X-Ray"
  }
];

const Specialisations = () => {
  const [selectedCard, setSelectedCard] = useState(1);
  const handleClick = (id) => {
    setSelectedCard(id);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginTop="30px"
      sx={{
        background:
          "linear-gradient( 81deg, #e7f0ff  , rgba(232, 241, 255, 0.47))",

        paddingBottom: "40px",
      }}
    >
      <Typography
        sx={{
          marginTop: { xs: "25px", sm: "30px", md: "40px" },
          fontWeight: "700",
          color: 'primary.dark',
          fontSize: { xs: "25px", sm: "30px", md: "33px" },
          letterSpacing: "0.1px",
          lineHeight: "67px",
        }}
      >
        Find By Specialiasation
      </Typography>

      <Box
        sx={{
          
          marginTop: "30px",
          width: "81%",
          height: "29vw",
          display: { xs: "none", sm: "block" },
        }}
      >
        <Grid
          container
          rowSpacing={{ xs: 3, sm: 2, md: 3 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          height="100%"
        >
          {cards.map((card) => (
            <Grid key={card.id} size={3}>
              <TextCard
                key={card.id}
                id={card.id}
                img={card.img}
                label={card.label}
                cardWidth="100%"
                cardHeight="100%"
                selected={selectedCard}
                handleClick={handleClick}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          
          marginTop: "30px",
          width: "81%",
          display: { xs: "block", sm: "none" },
        }}
      >
        <Grid
          container
          rowSpacing={{ xs: 3, sm: 2, md: 3 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          height="100%"
        >
          {cards.map((card) => (
            <Grid size={6}>
              <TextCard
                key={card.id}
                id={card.id}
                img={card.img}
                label={card.label}
                cardWidth="100%"
                cardHeight="120%"
                selected={selectedCard}
                handleClick={handleClick}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Button label="View All" margin="40px 0px 0px 0px">
        View All
      </Button>
    </Box>
  );
};
export default Specialisations;
