import { Box, Typography, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import image from "../../assets/Images/contact.png";
import arrow from "../../assets/Images/arrow.svg";
import Button from "../../components/Buttons/ButtonPrimary.jsx";
import Playstore from "../../assets/Images/playstore.png";
import Apple from "../../assets/Images/apple-logo.png";

const Contact = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: "4.5vw",
        justifyContent: "center",
        alignItems: {xs:'center',sm:'flex-start'},
        padding: { xs: "40px 6vw", sm: "40px 6vw 0px 0px" },
      }}
    >
      <Box
        component="img"
        sx={{
          height: { xs: "65vw", sm: "30vw" },
          width: { xs: "65vw", sm: "30vw" },
          //border: "2px solid green"
          
        }}
        alt="patient-stats"
        src={image}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          //border: "2px solid red",
          width: {xs:'60vw', sm:'42%'},
          margin: "3vw 0px",
          position:'relative'
        }}
      >
        <Box>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize:{xs:'5vw',sm:'3vw'},
              letterSpacing: 2,
              color: "primary.dark",
              lineHeight: {xs:'20px',sm:'25px'}
            }}
          >
            Download the
          </Typography>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: {xs:'5vw',sm:'3vw'},
              letterSpacing: 2,
            }}
          >
            <Box component="span" sx={{ color: "primary.main" }}>
              Medify
            </Box>{" "}
            <Box component="span" sx={{ color: "primary.dark" }}>
              App
            </Box>
          </Typography>
        </Box>
        <Typography
          sx={{
            color: "secondary.alternateDarkGray",
            marginTop: "15px",
            fontSize: { xs: "2vw", sm: "1.5vw", md: "1.1vw" },
          }}
          align="justify"
        >
          Get the link to download the app
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            gap: [2],
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            width:'100%',
            mt:{xs:1,sm:1}
          }}
        >
          <TextField
            sx={{
              border: "1px solid #F0F0F0",
              flex: 1,
              padding: "none",
              "& .MuiOutlinedInput-input": {
                fontSize: { xs: "2vw", sm: "1.5vw", md: "1.1vw" },
              },
              width:{xs:'100%',sm:'24vw'} ,
            }}
            size="small"
            placeholder="Enter phone number"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Typography
                      sx={{
                        color: "secondary.main",
                        fontSize: { xs: "2vw", sm: "1.5vw", md: "1.1vw" },
                      }}
                    >
                      +91
                    </Typography>
                  </InputAdornment>
                ),
              },
            }}
            required
          />
          <Button
            label="Send SMS"
            type="submit"
            variant="contained"
            width={{xs:'100%',sm:'fit-content'}} 
            //height={30}
            
            fontSize={{ xs: "2vw", sm: "1.5vw", md: "1.1vw" }}
            padding={{ xs: "11px 0px", sm: "11px 0px", md: "16px 10px" }}
            disableElevation
          >
            Send SMS
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: { xs: "2.5vw", sm: "2.5vw", md: "3vw" },
            gap: { xs: "1.2vw", sm: "1.8vw", md: "2vw" },
            flexDirection:{xs:'column',sm:'row'},
            width:'100%'
          }}
        >
          <Button
            label="Google Play"
            bckColor="#333"
            icon={
              <Box
                component="img"
                sx={{
                  height: { xs: "3vw", sm: "2vw" },
                  width: { xs: "3vw", sm: "2vw" },
                }}
                src={Playstore}
                alt="apple-logo"
              />
            }
            width={{xs:'100%',sm:"fit-content"}}
            height="fit-content"
            fontSize={{ xs: "2vw", sm: "1.7vw" }}
            padding={{ xs: "11px", sm: "9px 15px" }}
          />
          <Button
            label="App Store"
            bckColor="#333"
            icon={
              <Box
                component="img"
                sx={{
                  height: { xs: "3vw", sm: "2vw" },
                  width: { xs: "3vw", sm: "2vw" },
                }}
                src={Apple}
                alt="playstore-logo"
              />
            }
            width={{xs:'100%',sm:"fit-content"}}
            height="fit-content"
            fontSize={{ xs: "2vw", sm: "1.7vw" }}
            padding={{ xs: "11px", sm: "9px 15px" }}
            disableElevation
          />
        </Box>
        
        <Box
          component="img"
          src={arrow}
          alt='arrow'
          sx={{
          height: { xs: "10vw", sm: "6vw" },
          width: { xs: "8vw", sm: "4vw" },
          //border: "2px solid green",
          transform: 'rotate(10deg)',
          position:'absolute',
          left:'-11%',
          top:'8%'
          }}
        />
      </Box>
    </Box>
  );
};
export default Contact;
