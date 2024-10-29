import react,{useState} from "react";
import styles from "./HeroOverlay.module.css";
import { Box, Typography } from "@mui/material";
import SearchLayout from "../Searchbar/SearchLayout";
import TextCard from "../Cards/TextCard";
import CardImg1 from "../../assets/Images/CardImg1.svg";
import CardImg2 from "../../assets/Images/CardImg2.svg";
import CardImg3 from "../../assets/Images/CardImg3.svg";
import CardImg4 from "../../assets/Images/CardImg4.svg";
import CardImg5 from "../../assets/Images/CardImg5.svg";

const cards = [
    {
        id:1,
        image:CardImg1,
        label:"Doctors"
    },
    {
        id:2,
        image:CardImg2,
        label:"Labs"
    },
    {
        id:3,
        image:CardImg3,
        label:"Hospitals"
    },
    {
        id:4,
        image:CardImg4,
        label:"Medical store"
    },
    {
        id:5,
        image:CardImg5,
        label:"Ambulance"
    }
];

const HeroOverlay = () => {
  const [selectedCard,setSelectedCard] = useState(3);
  const handleClick = (id)=>{
    setSelectedCard(id);
  }
  return (
    <Box className={styles.heroOverlay}>
      
      <Box sx={{ display: { xs: "none", md: "block" } }}><SearchLayout /></Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}><SearchLayout stack /></Box>

        <Typography
          variant="subtitle1"
          sx={{
            color:"#102851",
            fontSize: { xs: "10px", sm: "15px", md: "15px " },
            lineHeight: "1.5",
            display:"flex",
            justifyContent:"center",
            fontWeight:"600"

          }}
        >
        You maybe looking for
      </Typography>
      <Box sx={
        {
         //border:"2px solid green",
         margin:"10px 20px 20px 20px",
         display:"flex",
         flexWrap:"wrap",
         justifyContent:"space-between"
         }}>
        {
            cards.map((card,idx)=> <TextCard 
            key={card.id}
            id={card.id}
            img={card.image} 
            label={card.label} 
            selected={selectedCard}
            handleClick={handleClick}
            />)
        }
         
      </Box>
    </Box>
  );
};
export default HeroOverlay;
