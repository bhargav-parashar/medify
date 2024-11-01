import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Typography } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";


export default function TextCard({id, img,label,selected,handleClick, grid, cardWidth, cardHeight}) {

    const background = id === selected? "rgba(42, 167, 255, 0.08)" : "#FAFBFE" ;
    const border = id === selected? "1px solid rgba(42, 167, 255, 1)" : "none" ;
    const fontColor = id === selected?"#2AA7FF":"#ABB6C7";


    return (
   
    <Card
    
      sx={{
        maxWidth: 345,
        backgroundColor:background,
        width:cardWidth,
        height:cardHeight,
        border:border,
        borderRadius:"10px"
      }}
    >
      <CardActionArea sx={{height:"100%"}} onClick={()=>handleClick(id)}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap:"1vw"
          }}
        >
          
          <Box
            component="img"
            sx={{
              height: {xs:"6vw",sm:"4vw", md:"3vw"},
              width: {xs:"6vw",sm:"4vw", md:"3vw"}
            }}
            alt="doctors"
            src={img}
          />
          <Typography  variant="body2" sx={{ color:fontColor , fontSize:{xs:"1.9vw",sm:"1.5vw", md:"1.1vw"},}}>
            {label}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
