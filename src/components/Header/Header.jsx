import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../assets/Logo/Logo.svg";
import Tabs from "./Tabs/Tabs";
import ButtonPrimary from "../Buttons/ButtonPrimary.jsx";
import { Link } from "react-router-dom";
import SearchLayout from "../Searchbar/SearchLayout.jsx";
import { useMainContext } from "../Context/MainContextProvider.jsx";
import SearchBookings from "../Searchbar/SearchBookings.jsx";

function Header({ isForBooking = false, bookings, setFilteredList }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const { selectedTab, setSelectedTab } = useMainContext();
  const handleClick = (id) => {
    setSelectedTab(id);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.main",
          height: "40px",
          color: "secondary.white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // position: "fixed",
          width: "100%",
          // zIndex: "1000",
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

      <Box>
        <Box
          maxWidth="xl"
          sx={{
            background: "transparent",
            //border:"2px solid red",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            boxSizing: "border-box",
            padding: "0px 0px",
          }}
        >
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              width: { xs: "100%", lg: "90%" },
              //border:"2px solid pink",
              height: "65px",
              padding: "0px 2vw",
            }}
          >
            <Link to="/">
              <Box
                component="img"
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  width: "82px",
                }}
                alt="medify-logo"
                src={Logo}
                onClick={() => handleClick(0)}
              />
            </Link>

            <Box
              sx={{
                width: { md: "85%", lg: "75%" },
                display: {
                  xs: "none",
                  md: "flex",
                },
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Tabs handleClick={handleClick} selectedTab={selectedTab} />

              <Link to="/my-bookings">
                <ButtonPrimary
                  label="My Bookings"
                  margin="0px 0px 0px 20px"
                  handleclick={() => handleClick(7)}
                />
              </Link>
            </Box>
          </Box>

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
              alignItems: "center",
              width: { xs: "100%", lg: "90%" },
              //border:"2px solid pink"
            }}
          >
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
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{ textAlign: "center", color: "primary.dark" }}
                  >
                    Find Doctors
                  </Typography>
                </MenuItem>

                <Link to="/search" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      sx={{ textAlign: "center", color: "primary.dark" }}
                    >
                      Hospitals
                    </Typography>
                  </MenuItem>
                </Link>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{ textAlign: "center", color: "primary.dark" }}
                  >
                    Medicines
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{ textAlign: "center", color: "primary.dark" }}
                  >
                    Surgeries
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{ textAlign: "center", color: "primary.dark" }}
                  >
                    Software for Provider
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{ textAlign: "center", color: "primary.dark" }}
                  >
                    Facilities
                  </Typography>
                </MenuItem>
                <Link to="/my-bookings" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      sx={{ textAlign: "center", color: "primary.dark" }}
                    >
                      My Bookings
                    </Typography>
                  </MenuItem>
                </Link>
              </Menu>
            </Box>

            <Link to="/">
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
            </Link>
          </Box>

          <Box
            sx={{
              backgroundColor: "primary.main",
              height: { xs: "8vw", sm: "6vw", md: "4.5vw" },
              width: "100%",
              display:
                selectedTab === 2 || selectedTab === 7 ? "block" : "none",
              zIndex: "1000",
              borderRadius: "0px 0px 10px 10px",
              boxSizing: "border-box",
              padding: "1vw 5vw 0vw 5vw",
              position: "relative",
            }}
          >
            {isForBooking && (
              <>
                <Typography
                  sx={{
                    color: "secondary.white",
                    fontSize: { xs: "3vw", sm: "20px", md: "20px " },
                  }}
                >
                  My Bookings
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    left: "50%",
                    top: { xs: "-15%", sm: "20%" },
                    transform: "translate(-50%, 0%)",
                  }}
                >
                  <SearchBookings
                    backgroundColor="white"
                    shadow
                    bookings={bookings}
                    setFilteredList={setFilteredList}
                  />
                </Box>
              </>
            )}
            {!isForBooking && (
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  top: "20%",
                  transform: "translate(-50%, 0%)",
                }}
              >
                <SearchLayout backgroundColor="white" shadow />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Header;
