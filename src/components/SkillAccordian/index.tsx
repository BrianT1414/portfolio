"use client";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props {
  name: string;
  years: number;
  body: React.ReactNode;
  id: string;
}

export default function SkillAccordian(props: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Accordion id={props.id} expanded={open} onChange={() => setOpen(!open)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <Typography sx={{ flexShrink: 0 }}>{props.name}</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {props.years} {props.years == 1 ? "year" : "years"}
          </Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails>{props.body}</AccordionDetails>
    </Accordion>
  );
}
