import Header from "../../components/Header/Header";
import { Box } from "@mui/material";
import Hero from "../../components/Sections/Hero/Hero.jsx";
import CouponSection from "../../components/Sections/CouponSection.jsx";
import Specialisations from "../../components/Sections/Specialisations.jsx";
import Doctors from "../../components/Sections/Doctors.jsx";
import PatientCare from "../../components/Sections/PatientCare.jsx";
import News from "../../components/Sections/News.jsx";
import Families from "../../components/Sections/Families.jsx";
import Faq from "../../components/Sections/Faq.jsx";
  
const HomePage = () => {
  return (
    <Box>
      <Header />
      <Hero/>
      <CouponSection/>
      <Specialisations/>
      <Doctors/>
      <PatientCare/>
      <News/>
      <Families/>
      <Faq/>
    </Box>
  );
};
export default HomePage;
