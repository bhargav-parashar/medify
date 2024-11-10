import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

export default function Searchbar({ placeholder = "Search" }) {
  return (
    <TextField
      id="input-with-icon-textfield"
      placeholder={placeholder}
      size="small"
      sx={{
        backgroundColor: 'secondary.alternateWhite',
        width: {xs : "100%",sm: "80%"},
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
