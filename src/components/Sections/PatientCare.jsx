import { Box, Typography } from "@mui/material";
import image1 from "../../assets/Images/patient-img-1.png";
import image2 from "../../assets/Images/patient-img-2.png";
import popup from "../../assets/Images/patient-popup.png";
import checkLogo from "../../assets/Images/checkLogo.svg";
import pointers from "../../data/patientPoints.json";

const PatientCare = () => {
  return (
    <Box
      sx={{
        background:"linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
        paddingBottom: "40px",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: "4.5vw",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px 6vw",
      }}
    >
      <Box
        sx={{
          height: { xs: "50vw", sm: "30vw" },
          width: { xs: "80vw", sm: "50vw" },
       
          position: "relative",
        }}
        alt="patient-care-image-section"
      >
        <img
          src={image1}
          alt="patient-img-1"
          style={{
            width: "60%",
            height: "60%",
            position: "absolute",
            right: "0%",
          }}
        />
        <img
          src={image2}
          alt="patient-img-2"
          style={{
            width: "60%",
            height: "60%",
            position: "absolute",
            bottom: "0%",
            right: "25%",
          }}
        />
        <img
          src={popup}
          alt="popup"
          style={{
            width: "50%",
            height: "30%",
            position: "absolute",
            top: "15%",
            left: "5%",
          }}
        />
      </Box>

      {/* Extra small screen */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        
          width: "90%",
        }}
      >
        <Typography
          sx={{ color: 'primary.main', fontWeight: "600", fontSize:{xs: "2vw",sm:"1vw"} }}
        >
          HELPING PATIENTS FROM AROUND THE GLOBE!!
        </Typography>
        <Box sx={{ display: "flex", gap: "0.2vw" }}>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize:{xs: "4vw",sm:"3.2vw",md:"3vw"},
              letterSpacing: 2,
            }}
          >
            <Box component='span' sx={{ color: 'primary.dark' }}>Patient</Box>{" "}
            <Box component='span' sx={{ color: 'primary.main' }}>Caring!</Box>
          </Typography>
        </Box>
        <Typography
          align="justify"
          sx={{ color: 'secondary.gray', margin:{xs: "10px 0px",sm:"10px 0px",md:"20px 0px"}, 
          fontSize:{xs: "2vw",sm:"1.5vw",md:""} }}
        >
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </Typography>
        {pointers.map((point) => (
          <Box
            key={point.id}
            sx={{
              display: "flex",
              gap: "0.5vw",
              marginBottom: {xs:"10px",md:"20px"},
              alignItems: {xs:"center",sm:""}
            }}
          >
            <Box
              component="img"
              alt="check-logo"
              src={checkLogo}
              sx={{ height: {xs:"2.5vw",sm:"2vw",md:""} }}
            />
            <Typography sx={{ fontSize: {xs:"2vw",sm:"1.5vw"} }}>{point.text}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default PatientCare;
