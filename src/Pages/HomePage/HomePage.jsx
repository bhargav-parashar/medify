import Header from "../../components/Header/Header";
import styles from "./HomePage.module.css";
import { Typography, Stack,Box } from "@mui/material";
import HeroDoctor from "../../assets/Images/HeroDoctor.svg"

const HomePage = () => {
  return (
    <Box>
      <Box className={styles.hero}>
        <Header />
        <Box className={styles.heroText}>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "18px", sm: "25px", md: "23px " },
            }}
          >
            Skip the travel! Find Online
          </Typography>

          <Box className={styles.heroSubtext}>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "#2AA7FF",
                fontSize: { xs: "33px", sm: "40px", md: "45px " },
                letterSpacing: "0.1px",
                lineHeight: { xs: "1.5", md: "1" },
              }}
            >
              Medical
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "33px", sm: "40px", md: "45px " },
                letterSpacing: "0.1px",
                lineHeight: { xs: "1.5", md: "1" },
              }}
            >
              Centers
            </Typography>
          </Box>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "Light",
              color: "#5C6169",
              width: '80% ',
              fontSize: { xs: "10px", sm: "15px", md: "15px " },
              lineHeight: "1.5"
            }}
          >
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </Typography>
        </Box>
        <Box className={styles.doctorHeroImage} sx={{display:{xs:'none',md  :'block'}, height:'400px', width:'400px'  }  }>
        <img  src={HeroDoctor} alt="doctor hero" />
        </Box>
        <Box className={styles.heroOverlay}></Box>
      </Box>
    </Box>
  );
};
export default HomePage;
