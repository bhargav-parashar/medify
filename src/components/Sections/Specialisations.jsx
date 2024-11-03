import react, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TextCard from "../Cards/TextCard.jsx";
import Button from "../../components/Buttons/ButtonPrimary.jsx";
import cards from "../../data/specialisationCards.json";

 
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
          //border: "2px solid black",
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
            <Grid size={3}>
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
          //border: "2px solid black",
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
