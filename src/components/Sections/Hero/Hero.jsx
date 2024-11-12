import styles from "./Hero.module.css";
import { Typography, Box, Button } from "@mui/material";
import HeroDoctor from "../../../assets/Images/HeroDoctor.svg";
import HeroOverlay from "./HeroOverlay";
import ButtonPrimary from "../../Buttons/ButtonPrimary";

const Hero = () => {
  return (
    <Box className={styles.hero}>
      <Box className={styles.heroText}>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "18px",  md: "23px " },
          }}
        >
          Skip the travel! Find Online
        </Typography>

        <Box className={styles.heroSubtext}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "33px",  md: "45px " },
              letterSpacing: "0.1px",
              lineHeight: { xs: "1.5", md: "1" },
            }}
          >
            Medical
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "33px",  md: "45px " },
              letterSpacing: "0.1px",
              lineHeight: { xs: "1.5", md: "1" },
              color: 'primary.main'
            }}
          >
            Centers
          </Typography>
        </Box>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "Light",
            color: 'secondary.darkGray',
            width: "80% ",
            fontSize: { xs: "10px",  md: "15px " },
            lineHeight: "1.5",
          }}
        >
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.
        </Typography>
        <ButtonPrimary label="Find Centers" width="120px" margin="5px 0px"/>
      </Box>
      <Box
        className={styles.doctorHeroImage}
        sx={{
          display: { xs: "none", md: "block" },
          height: "400px",
          width: "400px",
        }}
      >
        <img src={HeroDoctor} alt="doctor hero" />
      </Box>
      <HeroOverlay />
    </Box>
  );
};
export default Hero;
