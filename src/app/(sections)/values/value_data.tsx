import { Typography } from "@mui/material";
import React from "react";

interface Value {
  name: string;
  body?: React.ReactNode;
}

export const values: Value[] = [
  {
    name: "Quality",
    body: (
      <>
        <Typography paragraph></Typography>
      </>
    ),
  },
  {
    name: "Ownership",
    body: (
      <>
        <Typography paragraph></Typography>
      </>
    ),
  },
  {
    name: "Purpose",
    body: (
      <>
        <Typography paragraph></Typography>
      </>
    ),
  },
];
