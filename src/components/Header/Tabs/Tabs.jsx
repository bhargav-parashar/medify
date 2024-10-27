import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{
      children: <span className="MuiTabs-indicatorSpan" />,
      sx: { height: 4 },
    }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 80,
    width: "100%",
    backgroundColor: "#2AA7FF",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontSize: "0.75rem",
    "&.Mui-selected": {
      color: "#2AA7FF",
      fontWeight:'700'
    },
    "& .MuiTab-root.Mui-selected": {
      style: "#2AA7FF",
      
    },
    "& button": {
      color: "#102851",
      textTransform: "none",
      fontSize: "0.75rem",
    },
  })
);

export default function CustomizedTabs({ pages }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ bgcolor: "transparent" }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          {pages.map((page) => (
            <StyledTab label={page} />
          ))}
        </StyledTabs>
      </Box>
    </Box>
  );
}
