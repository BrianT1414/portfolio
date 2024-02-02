"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";

interface Props {
  name: string;
  years: number;
  body: React.ReactNode;
  logo_src: string;
}

export default function SkillCard(props: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Card sx={{ height: "100%" }}>
      <div
        style={{
          height: 150,
          display: "flex",
          alignItems: "center",
          paddingTop: 10,
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 150, p: 2 }}
          image={props.logo_src}
          alt={`${props.name} logo`}
        />
      </div>
      <CardHeader
        title={<Typography>{props.name}</Typography>}
        subheader={
          <Typography sx={{ color: "text.secondary" }}>
            {props.years} {props.years == 1 ? "year" : "years"}
          </Typography>
        }
        disableTypography
      />

      {/* <CardContent>{props.body}</CardContent> */}
    </Card>
  );
}
