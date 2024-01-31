"use client";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props {
  name: string;
  body: React.ReactNode;
}

export default function Value(props: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Accordion expanded={open} onChange={() => setOpen(!open)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <Typography sx={{ flexShrink: 0 }}>{props.name}</Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails>{props.body}</AccordionDetails>
    </Accordion>
  );
}
