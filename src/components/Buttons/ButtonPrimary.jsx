import { Button } from "@mui/material";


const ButtonPrimary = ({height="33px", width="120px", label="Click", margin="0px 0px", icon}) => {
  return(
  <Button
    variant="contained"
    startIcon={icon}
    sx={{
      my: 2,
      color: "#FFFFFF",
      background: "#2AA8FF",
      textTransform: "none",
      fontSize: "0.75rem",
      width: width,
      margin:margin,
      height: height
    }}
  >
    {label}
  </Button>
  )
};
export default ButtonPrimary;
