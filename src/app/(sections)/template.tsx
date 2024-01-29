import { Typography } from "@mui/material";
import React from "react";
import styles from "./sections.module.css";

interface Props extends React.PropsWithChildren {
  title: string;
  description: string;
}

export default function Template(props: Props) {
  return (
    <div>
      <div className={styles.template_title}>
        <Typography variant="h2">{props.title}</Typography>
      </div>
      <div>
        <Typography>{props.description}</Typography>
      </div>
      <div>{props.children}</div>
    </div>
  );
}