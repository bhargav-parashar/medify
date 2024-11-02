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
          //border: "2px solid green",
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
          display: { xs: "flex", sm: "none" },
          flexDirection: "column",
          alignItems: "flex-start",
          //border: "2px solid red",
          width: "90%",
        }}
      >
        <Typography
          sx={{ color: "#2AA7FF", fontWeight: "600", fontSize: "2vw" }}
        >
          HELPING PATIENTS FROM AROUND THE GLOBE!!
        </Typography>
        <Box sx={{ display: "flex", gap: "0.2vw" }}>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "4vw",
              letterSpacing: 2,
            }}
          >
            <span style={{ color: "#1B3C74" }}>Patient</span>{" "}
            <span style={{ color: "#2AA7FF" }}>Caring!</span>
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#77829D", margin: "10px 0px", fontSize: "2vw" }}
        >
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </Typography>
        {pointers.map((point) => (
          <Box
            sx={{
              display: "flex",
              gap: "0.5vw",
              marginBottom: "10px",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              alt="check-logo"
              src={checkLogo}
              sx={{ height: "2.5vw" }}
            />
            <Typography sx={{ fontSize: "2vw" }}>{point.text}</Typography>
          </Box>
        ))}
      </Box>

      {/* small screen */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex", md: "none" },
          flexDirection: "column",
          alignItems: "flex-start",
          //border: "2px solid red",
          width: "90%",
        }}
      >
        <Typography
          sx={{ color: "#2AA7FF", fontWeight: "600", fontSize: "1vw" }}
        >
          HELPING PATIENTS FROM AROUND THE GLOBE!!
        </Typography>
        <Box sx={{ display: "flex", gap: "0.2vw" }}>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "3.2vw",
              letterSpacing: 2,
            }}
          >
            <span style={{ color: "#1B3C74" }}>Patient</span>{" "}
            <span style={{ color: "#2AA7FF" }}>Caring!</span>
          </Typography>
        </Box>
        <Typography
          sx={{ color: "#77829D", margin: "10px 0px", fontSize: "1.5vw" }}
        >
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </Typography>
        {pointers.map((point) => (
          <Box sx={{ display: "flex", gap: "0.5vw", marginBottom: "10px" }}>
            <Box
              component="img"
              alt="check-logo"
              src={checkLogo}
              sx={{ height: "2vw" }}
            />
            <Typography sx={{ fontSize: "1.5vw" }}>{point.text}</Typography>
          </Box>
        ))}
      </Box>

      {/* medium+ screen */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "flex-start",
          //border: "2px solid red",
          width: "90%",
        }}
      >
        <Typography
          sx={{ color: "#2AA7FF", fontWeight: "600", fontSize: "1vw" }}
        >
          HELPING PATIENTS FROM AROUND THE GLOBE!!
        </Typography>
        <Box sx={{ display: "flex", gap: "0.2vw" }}>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "3vw",
              letterSpacing: 2,
            }}
          >
            <span style={{ color: "#1B3C74" }}>Patient</span>{" "}
            <span style={{ color: "#2AA7FF" }}>Caring!</span>
          </Typography>
        </Box>
        <Typography sx={{ color: "#77829D", margin: "20px 0px" }}>
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </Typography>
        {pointers.map((point) => (
          <Box sx={{ display: "flex", gap: "0.5vw", marginBottom: "20px" }}>
            <Box component="img" alt="check-logo" src={checkLogo} />
            <Typography sx={{ fontSize: "1.5vw" }}>{point.text}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default PatientCare;
