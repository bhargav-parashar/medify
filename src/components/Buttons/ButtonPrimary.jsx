import { Button } from "@mui/material";

const ButtonPrimary = ({height="33px", width="120px", label="Click", margin="0px 0px", icon, type='submit', disableElevation, fontSize= "0.75rem", padding="none", bckColor='primary.main'}) => {
 
  return(
  <Button
    type={type}
    variant="contained"
    startIcon={icon}
    disableElevation = {disableElevation}
    sx={{
      my: 2,
      color: 'secondary.white',
      background: bckColor,
      textTransform: "none",
      fontSize: fontSize,
      padding:padding,
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
