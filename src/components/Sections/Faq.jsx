import { Box, Typography } from "@mui/material";
import faqImg from "../../assets/Images/faq-img.png";
import popupHeart from "../../assets/Images/support.png";
import popupHappy from "../../assets/Images/smiley.png";
import Accordion from "../../components/Accordion/Accordion.jsx";
import faqData from "../../data/faq.json";

const Faq = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        paddingBottom: "40px",
      }}
    >
      <Typography
        sx={{
          marginTop: { xs: "25px", sm: "30px", md: "40px " },
          marginBottom: "10px",
          fontWeight: "700",
          color: "primary.main",
          fontSize: { xs: "10px", sm: "15px", md: "17px" },
          letterSpacing: "0.1px",
          lineHeight: "20px"
        }}
      >
        Get Your Answer
      </Typography>
      <Typography
        sx={{
          fontWeight: "700",
          color: "primary.dark",
          fontSize: { xs: "25px", sm: "30px", md: "33px " },
          letterSpacing: "0.1px",
          lineHeight: "40px",
        }}
      >
        Frequently Asked Questions
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          width: "81%",
          marginTop: "20px",
        }}
      >
        <Box
          sx={{
            height: { xs: "50vw", sm: "35vw" },
            width: { xs: "65vw", sm: "50vw" },
            //border: "2px solid green",
            position: "relative",
          }}
          alt="faq-image-section"
        >
          <img
            src={faqImg}
            alt="patient-img-1"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
          />
          <Box
            sx={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              backgroundColor: "secondary.white",
              height: {xs:'8vw',sm:'4.9vw'},
              width: {xs:'8vw',sm:'4.9vw'},
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              zIndex: 2,
              top: "30%",
              right: "3%",
            }}
          >
            <img
              src={popupHeart}
              alt="popup-heart"
              style={{
                width: "50%",
                height: "50%",
              }}
            />
          </Box>
          <Box
            sx={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              backgroundColor: 'secondary.white',
              height: {xs:'7vw',sm:'5vw'},
              width: {xs:'20vw',sm:'13vw'},
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              zIndex: 2,
              bottom: "30%",
              left: "-12%",
              gap: "1vw",
            }}
          >
            <Box
              component="img"
              sx={{
                width: {xs:'3vw',sm:'2vw'},
                height: {xs:'3vw',sm:'2vw'},
                marginLeft: "8%",
              }}
              src={popupHappy}
              alt="popup-happy"
            />
            
            <Box sx={{ marginRight: "8%" }}>
              <Typography
                sx={{
                  color: 'primary.dark',
                  fontWeight: "600",
                  letterSpacing: 1,
                  fontSize: {xs:'2vw',sm:'1.3vw'},
                }}
              >
                84k+
              </Typography>
              <Typography
                sx={{ color: 'secondary.gray', letterSpacing: 1, fontSize:{xs:'1vw',sm:'0.8vw'},  }}
              >
                Happy Patients
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            height: { xs: "50vw", sm: "35vw" },
            width: { xs: "65vw", sm: "50vw" },
            display:"flex",
            flexDirection: "column",
            alignItems: "flex-start",
            boxSizing: "border-box",
            padding:{xs:"0px 0px",md:"2vw 0px"} ,
            //border: "2px solid red",
          }}
        >
          <Accordion data={faqData} />
        </Box>

      </Box>
    </Box>
  );
};
export default Faq;
