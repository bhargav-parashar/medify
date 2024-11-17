import { useState, useMemo } from "react";
import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ClearIcon from "@mui/icons-material/Clear";

const SearchLayout = ({
  backgroundColor = "transparent",
  shadow,
  bookings,
  setFilteredList,
}) => {
  const [searchItem, setSearchItem] = useState("");

  const filteredList = useMemo(() => {
    if (!searchItem.trim()) return bookings;
    return bookings.filter((item) =>
      item["Hospital Name"]
        .toLowerCase()
        .includes(searchItem.trim().toLowerCase())
    );
  }, [searchItem, bookings]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = filteredList;
    console.log(res);
    setFilteredList(res);
  };
  const handleClear = () => {
    setFilteredList(bookings);
    setSearchItem("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          backgroundColor: { backgroundColor },
          boxShadow: shadow ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "none",
          borderRadius: "10px",
          display: "flex",
          height: { xs: "fit-content", sm: "100px" },
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          gap: { xs: "8px", sm: "0px" },
          margin: "20px",
          padding: "1vw 0vw",
        }}
      >
        <Box
          sx={{
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
                endAdornment: (
                  <InputAdornment position="end">
                    <ClearIcon
                      onClick={handleClear}
                      sx={{ cursor: "pointer" }}
                    />
                  </InputAdornment>
                ),
              },
            }}
            required
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </Box>
        <Box
          sx={{
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
            width={{ xs: "100%", sm: "280px" }}
            height={{ xs: "fit-content", sm: "40px" }}
            fontSize={{ xs: "1.5vw", sm: "1.2vw" }}
          />
        </Box>
      </Box>
    </form>
  );
};
export default SearchLayout;
