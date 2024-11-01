import Header from "../../components/Header/Header";
import { Box } from "@mui/material";
import Hero from "../../components/Sections/Hero/Hero.jsx";
import CouponSection from "../../components/Sections/CouponSection.jsx";
import Specialisations from "../../components/Sections/Specialisations.jsx";
const HomePage = () => {
  return (
    <Box>
      <Header />
      <Hero/>
      <CouponSection/>
      <Specialisations/>
    </Box>
  );
};
export default HomePage;
