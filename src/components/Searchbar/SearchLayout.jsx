import React from "react";
import Box from "@mui/material/Box";
import Searchbar from "./Searchbar";
import SearchIcon from "@mui/icons-material/Search";
import ButtonPrimary from "../Buttons/ButtonPrimary";

const SearchLayout = () => {
  return (
    <Box
      sx={{
        //border: "2px solid black",
        display: "flex",
        height:{xs: "fit-content", sm: "100px"},
        flexDirection:  {xs:"column",sm: "row"},
        justifyContent:"center",
        gap:  {xs:"8px",sm:"0px"},
        margin:"20px"
      }}
    >
      <Box
        sx={{
          //border: "2px solid green",
          display: "flex",
          flexDirection: {xs:"column",sm:  "row"},
          alignItems: "center",
          justifyContent: "space-between",
          width: {xs:"cover",sm : "70%"},
          gap: {xs: "5px",md:"10px"},
          padding: { xs:"0px 10px 0px 10px",sm: "0px 0px 0px 0px"}
        }}
      >
        <Searchbar placeholder="State" />
        <Searchbar placeholder="City" />
      </Box>
      <Box
        sx={{
          //border: "2px solid red",
          width: {xs: "cover",sm : "20%"},
          display: "flex",
          alignItems: "center",
          justifyContent: {xs: "center",sm : "flex-end"},
          padding: {xs: "0px 10px 0px 10px",sm: "0px 5px 0px 5px"},
        }}
      >
        <ButtonPrimary
          label="Search"
          icon= {<SearchIcon />}
          width= {{xs:"90px",sm:"120px"}}
          height={{xs:"30px",sm: "40px"}}
        />
      </Box>
    </Box>
  );
};
export default SearchLayout;
