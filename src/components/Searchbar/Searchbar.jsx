import React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

export default function Searchbar({ placeholder = "Search", width="33%" }) {
  return (
    <TextField
      id="input-with-icon-textfield"
      placeholder={placeholder}
      size="small"
      sx={{
        backgroundColor: 'secondary.alternateWhite',
        width: {width},
      }}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
      variant="outlined"
    />
  );
}
