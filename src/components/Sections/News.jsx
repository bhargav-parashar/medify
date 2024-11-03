import { Box, Typography } from "@mui/material";
import ArticleCard from "../Cards/ArticleCard";
import image from "../../assets/Images/card-img-detox.png";
import authorImage from "../../assets/Images/author-rebecca.svg";

const articles = [
  {
    id: 1,
    date: "2024-10-15T07:15:30.000Z",
    img: image,
    category: "Medical",
    title: "6 Tips To Protect Your Mental Health When You’re Sick",
    author: "Rebecca Lee",
    authorImg: authorImage,
  },
  {
    id: 2,
    date: "2024-10-15T07:15:30.000Z",
    img: image,
    category: "Medical",
    title: "6 Tips To Protect Your Mental Health When You’re Sick",
    author: "Rebecca Lee",
    authorImg: authorImage,
  },
  {
    id: 3,
    date: "2024-10-15T07:15:30.000Z",
    img: image,
    category: "Medical",
    title: "6 Tips To Protect Your Mental Health When You’re Sick",
    author: "Rebecca Lee",
    authorImg: authorImage,
  },
];

const News = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        paddingBottom: "40px",
        
      }}
    >
      <Typography
        sx={{
          marginTop: { xs: "25px", sm: "30px", md: "40px " },
          marginBottom: "10px",
          fontWeight: "700",
          color: "#2AA7FF",
          fontSize: { xs: "10px", sm: "15px", md: "17px" },
          letterSpacing: "0.1px",
          lineHeight: "20px",
        }}
      >
        Blog and News
      </Typography>
      <Typography
        sx={{
          fontWeight: "700",
          color: "#1B3C74",
          fontSize: { xs: "25px", sm: "30px", md: "33px " },
          letterSpacing: "0.1px",
          lineHeight: "40px",
        }}
      >
        Read Our Latest News
      </Typography>
      <Box
        sx={{
          //border: "2px solid cyan",
          width: "81%",
          mt: "30px",
          display: "flex",
          justifyContent:"space-between"
        }}
      >
        {articles.map((article) => (
          <ArticleCard 
          key={article.id} 
          data={article} 
          cardWidth="32%"
          />
        ))}
      </Box>
    </Box>
  );
};
export default News;
