"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import {
  Button,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

interface Props {
  name: string;
  years: number;
  body: React.ReactNode;
  logo_src: string;
}

export default function SkillCard(props: Props) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);

  return (
    <>
      <Card sx={{ height: "100%" }}>
        <CardActionArea onClick={() => setOpen(!open)}>
          <div
            style={{
              height: 150,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
        </CardActionArea>
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          id={`${props.name}-dialog-title`}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {props.name}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={props.logo_src}
            alt={`${props.name} logo`}
            style={{ width: 50 }}
          />
        </DialogTitle>
        <DialogContent>{props.body}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
