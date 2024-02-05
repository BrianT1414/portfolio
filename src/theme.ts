"use client";
import { indigo } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: indigo,
    },
  }),
);

export default theme;
