import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../assets/Logo/Logo.svg";
import Tabs from "./Tabs/Tabs";
import ButtonPrimary from "../Buttons/ButtonPrimary.jsx";

const pages = [
  "Find Doctors",
  "Hospitals",
  "Medicines",
  "Surgeries",
  "Software for Provider",
  "Facilities",
];
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box sx={{
        backgroundColor:'primary.main',
        height: '40px',
        color: 'secondary.white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        width:'100%',
        zIndex: '1000'
      }}
      >
        <Typography
          sx={{
            fontSize: { xs: "5.5px", sm: "10px", md: "14px" },
            textAlign: "center",
          }}
        >
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
      </Box>
      <AppBar position="static" elevation={0}>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            top: "40px",
            zIndex: "1000",
            background: 'linear-gradient(81deg, rgba(231,240,255,1) , rgba(232, 241, 255,1)  )'
          
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: { xs: "100%", lg: "82%" },
            }}
          >
            <Box
              component="img"
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                width: "82px",
              }}
              alt="medify-logo"
              src={Logo}
            />

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: "center", color: 'primary.dark' }}>
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              component="img"
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                width: "82px",
              }}
              alt="medify-logo"
              src={Logo}
            />

            <Box
              sx={{
                width: { md: "85%", lg: "75%" },
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                },
              }}
            >
              <Tabs pages={pages} />
            <ButtonPrimary label="My Bookings" margin="0px 0px 0px 20px"/>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default ResponsiveAppBar;
