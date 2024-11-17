import { useState, useEffect } from "react";
import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SearchLayout = ({ backgroundColor = "transparent", shadow }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          //border: "2px solid black",
          backgroundColor: { backgroundColor },
          boxShadow: shadow ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "none",
          //boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          borderRadius: "10px",
          display: "flex",
          height: { xs: "fit-content", sm: "100px" },
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          gap: { xs: "8px", sm: "0px" },
          margin: "20px",
        }}
      >
        <Box
          sx={{
            //border: "2px solid green",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            width: { xs: "cover", sm: "70%" },
            gap: { xs: "5px", md: "10px" },
            padding: { xs: "0px 10px 0px 10px", sm: "0px 0px 0px 0px" },
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
              width: { xs: "100%", sm: "24vw" },
            }}
            size="small"
            placeholder="Search By Hospital"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlinedIcon />
                  </InputAdornment>
                ),
              },
            }}
            required
          />
        </Box>
        <Box
          sx={{
            //border: "2px solid red",
            width: { xs: "cover", sm: "20%" },
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "flex-end" },
            padding: { xs: "0px 10px 0px 10px", sm: "0px 5px 0px 5px" },
          }}
        >
          <ButtonPrimary
            label="Search"
            icon={<SearchIcon />}
            width={{ xs: "90px", sm: "280px" }}
            height={{ xs: "30px", sm: "40px" }}
          />
        </Box>
      </Box>
    </form>
  );
};
export default SearchLayout;
