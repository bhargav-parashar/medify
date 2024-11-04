import { Box, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import Logo from "../../assets/Logo/Logo.svg";
import Fb from "../../assets/Logo/fb.svg";
import Twitter from "../../assets/Logo/twitter.svg";
import Youtube from "../../assets/Logo/youtube.svg";
import Pinterest from "../../assets/Logo/pinterest.svg";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const socialMedia = [
  {
    id: 1,
    title: "Facebook",
    logo: Fb,
  },
  {
    id: 2,
    title: "Twitter",
    logo: Twitter,
  },
  {
    id: 3,
    title: "Youtube",
    logo: Youtube,
  },
  {
    id: 4,
    title: "Pinterest",
    logo: Pinterest,
  },
];

const linkSet1 = [
  {
    id: 1,
    title: "About Us",
  },
  {
    id: 2,
    title: "Our Pricing",
  },
  {
    id: 3,
    title: "Our Gallery",
  },
  {
    id: 4,
    title: "Appointment",
  },
  {
    id: 5,
    title: "Privacy Policy",
  },
];

const linkSet2 = [
  {
    id: 1,
    title: "Orthology",
  },
  {
    id: 2,
    title: "Neurology",
  },
  {
    id: 3,
    title: "Dental Care",
  },
  {
    id: 4,
    title: "Opthalmology",
  },
  {
    id: 5,
    title: "Cardiology",
  },
];

const Footer = () => {
  return (
    <Box
      sx={{
        //height: "250px",
        backgroundColor: "primary.dark",
        padding: "5% 10%",
        
      }}
    >
      <Box sx={{ height: "100%", width: "100%", display: "flex", flexDirection:{xs:'column',md:'row'},marginBottom:'40px' }}>
        <Box
          sx={{
            //border: "2px solid white",
            position: "relative",
            display: "flex",
            height: {xs:'100px',md:'213px'},
            width: "40%",
          }}
        >
          <Box
            component="img"
            src={Logo}
            alt="medify-logo"
            sx={{
              height:{xs:'4vw',md:'2.5vw'},
              position: "absolute",
              left: "3%",
              top: "8%",
            }}
          />
          <Box
            sx={{
              display: "flex",
              gap: [1.5],
              position: "absolute",
              left: "3%",
              bottom: "5%",
            }}
          >
            {socialMedia.map((item) => (
              <Box
                key={item.id}
                component="img"
                src={item.logo}
                alt={item.title}
                sx={{
                  height:{xs:'4vw',md:'2.5vw'},
                 
                }}
              />
            ))}
          </Box>
        </Box>
        <Box
          sx={{
           // border: "2px solid white",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            height: '213px',
            width: "20%",
          }}
        >
          {linkSet1.map((item) => (
            <Link sx={{cursor:'pointer', color:'secondary.white',textDecoration: 'none', fontSize:{xs:'1.5vw',md:'1vw'}}}><Box sx={{display:'flex',alignItems:'center'}}><ChevronRightIcon sx={{height:{xs:'3vw',md:'1.5vw'}}}/>{item.title}</Box></Link>
          ))}
        </Box>
        <Box
          sx={{
            //border: "2px solid white",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            height: '213px',
            width: "20%",
          }}
        >
          {linkSet2.map((item) => (
             <Link sx={{cursor:'pointer', color:'secondary.white',textDecoration: 'none',fontSize:{xs:'1.5vw',md:'1vw'}}}><Box sx={{display:'flex',alignItems:'center'}}><ChevronRightIcon sx={{height:{xs:'3vw',md:'1.5vw'}}}/>{item.title}</Box></Link>
          ))}
        </Box>
        <Box
          sx={{
            //border: "2px solid white",
            position: "relative",
            display: {xs:'none',md:'flex'},
            flexDirection: "column",
            justifyContent: "space-evenly",
            height: '213px',
            width: "20%",
          }}
        >
          {linkSet1.map((item) => (
            <Link sx={{cursor:'pointer', color:'secondary.white',textDecoration: 'none',fontSize:'1vw'}}><Box sx={{display:'flex',alignItems:'center'}}><ChevronRightIcon sx={{height:{xs:'3vw',md:'1.5vw'}}} />{item.title}</Box></Link>
          ))}
        </Box>
      </Box>
      <Box sx={{ borderTop: "1px solid gray", paddingTop: "20px"}}>
        <Typography
          variant="caption"
          letterSpacing={1}
          sx={{ color: "secondary.white" }}
        >
          Copyright ©2024 Bhargav Nursing Home.com. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};
export default Footer;
