import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Typography } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";


export default function TextCard({id, img,label,selected,handleClick}) {

    const background = id === selected? "rgba(42, 167, 255, 0.08)" : "#FAFBFE" ;
    const border = id === selected? "1px solid rgba(42, 167, 255, 1)" : "none" ;

    return (
   
    <Card
    
      sx={{
        maxWidth: 345,
        backgroundColor:{background},
        //width: "183px",
        //height: "133px",
        // width: "14vw",
        // height: "10vw",
        width: "18%",
        height: "10vw",
        border:{border}
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
              // height: "50px",
              // width: "50px",
              height: "3vw",
              width: "3vw",
            }}
            alt="doctors"
            src={img}
          />
          <Typography  variant="body2" sx={{ color: "#ABB6C7", fontSize:"1.2vw" }}>
            {label}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
