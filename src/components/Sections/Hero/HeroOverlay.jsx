import react, { useState } from "react";
import styles from "./HeroOverlay.module.css";
import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
import SearchLayout from "../../Searchbar/SearchLayout.jsx";
import TextCard from "../../Cards/TextCard.jsx";
import cards from "../../../data/serviceCards.json";


const HeroOverlay = () => {
  const [selectedCard, setSelectedCard] = useState(3);
  const handleClick = (id) => {
    setSelectedCard(id);
  };
  return (
    <Box className={styles.heroOverlay}>

      {/* extra small screen */}
      <Box sx={{ display: { xs: "block", sm: "none" }, width:"100%" }}>
        <SearchLayout stack />
      </Box>


      {/* small screen */}
      <Box sx={{ display: { xs: "none", sm: "block", lg: "none" }, width:"100%" }}>
        <SearchLayout searchBoxGap="10px" />
      </Box>


      {/* Large  screen */}
      <Box sx={{ display: { xs: "none", lg: "block" }, width:"100%" }}>
        <SearchLayout searchBoxGap="10px"/>
      </Box>

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
        margin: {xs:"10px 20px 20px 20px",sm:"5px 20px 20px 20px", md:"10px 20px 20px 20px"},
        width:{xs:"81%", md:"95%"},
        height:"40%"
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
          <Grid item key={card.title} size={{ xs:4,  md:2.4}}>
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
