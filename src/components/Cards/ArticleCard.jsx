import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function ActionAreaCard({ data, cardWidth, cardHeight }) {
  const dateConvertor = (string) => {
    if (!string) return;
    const date = new Date(string);
    const month = date.toLocaleDateString("en-IN", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();
    const formattedDate = `${month} ${day}, ${year}`;
    return formattedDate;
  };

  return (
    <Card sx={{ maxWidth: 345, width: "32%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="80%"
          image={data.img}
          alt="article"
        />

        {/* Extra small screens */}
        <CardContent sx={{display:{xs:"block",sm:"none", padding:"0px 10px"}}}>
          <Typography gutterBottom variant="body2" component="div">
            <span style={{ color: 'secondary.gray', fontSize:"1.2vw" }}>{data.category}</span>{" "}
            <span style={{ color: 'secondary.lightGray',fontSize:"1.8vw" }}>|</span>{" "}
            <span style={{ color: 'secondary.gray',fontSize:"1.2vw" }}>{dateConvertor(data.date)}</span>
          </Typography>
          <Typography variant="body1" sx={{ color: 'primary.dark',fontSize:"1.6vw" }}>
            {data.title}
          </Typography>
          <Box sx={{display:"flex", alignItems:"center", gap:"3px" }}>
            <Box
              component="img"
              sx={{
                //border:"1px solid black",
                height:"14px",
                width:"14px",
                maxHeight:{ xs: 233, md: 167 },
                maxWidth:{ xs: 350, md: 250 }
              }}
              alt="author image"
              src={data.authorImg}
            />
            <Typography
              gutterBottom
              variant="body2"
              component="div"
              sx={{ color: 'primary.dark', margin:"10px 0px", fontSize:"1.5vw"}}
            >
              {data.author}
            </Typography>
          </Box>
        </CardContent>

        {/* Small screens */}
        <CardContent sx={{display:{xs:"none",sm:"block", md:"none"}}}>
          <Typography gutterBottom variant="body2" component="div">
            <span style={{ color: 'secondary.gray', fontSize:"1.5vw" }}>{data.category}</span>{" "}
            <span style={{ color: 'secondary.lightGray',fontSize:"1.8vw" }}>|</span>{" "}
            <span style={{ color: 'secondary.gray',fontSize:"1.5vw" }}>{dateConvertor(data.date)}</span>
          </Typography>
          <Typography variant="body1" sx={{ color: 'primary.dark',fontSize:"2vw" }}>
            {data.title}
          </Typography>
          <Box sx={{display:"flex", alignItems:"center", gap:"3px" }}>
            <Box
              component="img"
              sx={{
                //border:"1px solid black",
                height:"20px",
                width:"20px",
                maxHeight:{ xs: 233, md: 167 },
                maxWidth:{ xs: 350, md: 250 }
              }}
              alt="author image"
              src={data.authorImg}
            />
            <Typography
              gutterBottom
              variant="body2"
              component="div"
              sx={{ color: 'primary.dark', margin:"10px 0px", fontSize:"1.5vw"}}
            >
              {data.author}
            </Typography>
          </Box>
        </CardContent>

        {/* Medium + screens */}
        <CardContent sx={{display:{xs:"none",md:"block"}}}>
          <Typography gutterBottom variant="body2" component="div">
            <span style={{ color: 'secondary.gray' }}>{data.category}</span>{" "}
            <span style={{ color: 'secondary.lightGray' }}>|</span>{" "}
            <span style={{ color: 'secondary.gray' }}>{dateConvertor(data.date)}</span>
          </Typography>
          <Typography variant="body1" sx={{ color: 'primary.dark' }}>
            {data.title}
          </Typography>
          <Box sx={{display:"flex", alignItems:"center", gap:"3px" }}>
            <Box
              component="img"
              sx={{
                //border:"1px solid black",
                height:"25px",
                width:"25px",
                maxHeight:{ xs: 233, md: 167 },
                maxWidth:{ xs: 350, md: 250 }
              }}
              alt="author image"
              src={data.authorImg}
            />
            <Typography
              gutterBottom
              variant="body2"
              component="div"
              sx={{ color: 'primary.dark', margin:"10px 0px"}}
            >
              {data.author}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
