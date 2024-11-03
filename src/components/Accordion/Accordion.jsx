import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";

export default function ControlledAccordions({ data }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {data.map((item, idx) => (
        <Accordion
          disableGutters
          key={item.idx}
          expanded={expanded === `panel${idx}`}
          onChange={handleChange(`panel${idx}`)}
          elevation={0}
          sx={{
            "&::before": {
              display: "none",
            },
            marginBottom:{xs:"1vw", sm:"0.5vw", md:"3vw"}
          }}
        >
          <AccordionSummary
            expandIcon={<AddIcon sx={{height:{xs:'3vw',sm:'2vw'}, width:{xs:'3vw',sm:'2vw'}}} />}
            aria-controls={`panel${idx}bh-content`}
            id={`panel${idx}bh-header`}
            sx={{
              "& .MuiAccordionSummary-expandIconWrapper": {
                color: 'primary.main',
              },
              "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                transform: "rotate(45deg)",
              }
              
            }}
          >
            <Typography sx={{ color: 'primary.dark', fontSize: {xs:'2.2vw', sm:'1.5vw'} }}>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "0px 20% 0px 16px" }}>
            <Typography sx={{ color: 'secondary.gray',fontSize:{xs:'1.8vw', sm:'1.2vw'}  }}>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
