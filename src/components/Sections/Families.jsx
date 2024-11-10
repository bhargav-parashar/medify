import { Box, Typography } from "@mui/material";
import image from "../../assets/Images/stats.png";
const Families = () => {
  return (
    <Box
      sx={{
        background:'linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)',
        paddingBottom: "40px",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: "4.5vw",
        justifyContent: "center",
        alignItems: "center",
        padding:{xs:"40px 6vw",sm:"20px 6vw"} ,
      }}
    >

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          //border: "2px solid red",
          width:{xs:"90%",sm:"38%",md:"42%"}
        }}
      >
        <Typography
          sx={{ color: 'primary.main', fontWeight: "600", fontSize:{xs:"2vw",sm:"1vw"} }}
        >
          CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
        </Typography>
        <Box sx={{ display: "flex", gap: "0.2vw" }}>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize:{xs:"4vw",sm:"3.2vw",md:"3vw"},
              letterSpacing: 2,
              color: 'primary.dark'
            }}
          >
            Our Families
          </Typography>
        </Box>
        <Typography
          align="justify"
          sx={{ color: 'secondary.gray', margin:{xs:"10px 0px",md:"20px 0px"} , fontSize: {xs:"2vw",sm:"1.5vw"}}}
        >
          We will work with you to develop individualised care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </Typography>
       </Box>

      <Box
        component="img"
        sx={{
          height: { xs: "60vw", sm: "40vw" },
          width: { xs: "50vw", sm: "30vw" },
          //border: "2px solid green",
          
        }}
        alt="patient-stats"
        src={image}
      />
    </Box>
  );
};
export default Families;
