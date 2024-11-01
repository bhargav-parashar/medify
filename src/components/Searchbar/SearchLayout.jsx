import React from "react";
import Box from "@mui/material/Box";
import Searchbar from "./Searchbar";
import SearchIcon from "@mui/icons-material/Search";
import ButtonPrimary from "../Buttons/ButtonPrimary";

const SearchLayout = ({ searchBoxGap = "100px", stack }) => {
  return (
    <Box
      sx={{
        //border: "2px solid black",
        display: "flex",
        height: stack ? "fit-content" : "100px",
        flexDirection: stack ? "column" : "row",
        justifyContent:"center",
        gap: stack ? "8px" : {},
        margin:"20px"
      }}
    >
      <Box
        sx={{
          //border: "2px solid green",
          display: "flex",
          flexDirection: stack ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: stack ? "cover" : "70%",
          gap: stack ? "5px" : searchBoxGap,
          padding: stack ? "0px 10px 0px 10px" : "0px 0px 0px 0px",
        }}
      >
        <Searchbar placeholder="State" width={stack ? "100%" : "80%"} />
        <Searchbar placeholder="City" width={stack ? "100%" : "80%"} />
      </Box>
      <Box
        sx={{
          //border: "2px solid red",
          width: stack ? "cover" : "20%",
          display: "flex",
          alignItems: "center",
          justifyContent: stack ? "center" : "flex-end",
          padding: stack ? "0px 10px 0px 10px" : "0px 5px 0px 5px",
        }}
      >
        <ButtonPrimary
          label="Search"
          //icon= {stack?null:<SearchIcon />}
          icon= {<SearchIcon />}
          width= {stack?"90px": "120px"}
          height={stack?"30px": "40px"}
        />
      </Box>
    </Box>
  );
};
export default SearchLayout;
