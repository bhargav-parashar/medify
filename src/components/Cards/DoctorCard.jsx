import * as React from "react";
import { Box, Typography } from "@mui/material";

const DocCard = ({ data }) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb:"50px" }}
    >
      <Box
        component="img"
        sx={{
          height: { xs: "40vw", sm:"30vw", md: "25vw" },
          boxShadow: "0px 15px 55px -10px #00000017",
        }}
        alt="doctors"
        src={data.img}
      />
      <Typography
        sx={{ color: 'primary.dark', mt: "8px", fontSize: { xs: "1.8vw", sm: "1.5vw" } }}
      >
        {data.name}
      </Typography>
      <Typography
        variant="caption"
        sx={{ color: 'primary.main', mt: "2px", fontSize: { xs: "1.2vw", sm: "1vw" } }}
      >
        {data.dept}
      </Typography>
    </Box>
  );
};
export default DocCard;
