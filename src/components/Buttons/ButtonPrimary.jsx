import { Button } from "@mui/material";

const ButtonPrimary = ({
  height = "33px",
  width = "120px",
  label = "Click",
  margin = "0px 0px",
  icon,
  type = "submit",
  disableElevation,
  fontSize = "0.75rem",
  padding = "none",
  bckColor = "primary.main",
  handleclick,
  variant="contained",
  color="secondary.white",
  border=""
  
}) => {
  return (
    <Button
      type={type}
      variant={variant}
      startIcon={icon}
      disableElevation={disableElevation}
      onClick={handleclick}
      sx={{
        my: 2,
        color: color,
        background: bckColor,
        textTransform: "none",
        fontSize: fontSize,
        padding: padding,
        width: width,
        margin: margin,
        height: height,
        border:border
      }}
    >
      {label}
    </Button>
  );
};
export default ButtonPrimary;
