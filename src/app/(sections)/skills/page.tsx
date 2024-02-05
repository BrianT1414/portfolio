"use client";
import React from "react";
import SkillAccordian from "@/components/SkillAccordian";
import Template from "../template";
import { skills } from "./skill_data";
import SkillCard from "@/components/SkillCard";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
import yearsFrom from "@/utils/yearsFrom";

const description = (
  <>
    On this page I have provided a list of specific technologies I have learned
    in my career. A simple list of skills and years of experience doesn&apos;t
    actually prove very much; so I have also included expandable sections where
    I describe my experience in a mini-blog post style to show a fuller picture
    of my expertise in each area.
  </>
);

export default function Skills() {
  const [view, setView] = React.useState("grid");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: string,
  ) => {
    setView(nextView);
  };

  return (
    <Template title="Skills" description={description}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 20,
        }}
      >
        <ToggleButtonGroup value={view} exclusive onChange={handleChange}>
          <ToggleButton value="grid" aria-label="grid">
            <ViewModuleIcon />
          </ToggleButton>
          <ToggleButton value="list" aria-label="list">
            <ViewListIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div
        style={{
          maxWidth: view == "grid" ? 800 : 600,
          margin: "auto",
          marginBottom: 30,
        }}
      >
        {view == "grid" ? (
          <Grid container spacing={2} rowSpacing={2}>
            {skills.map((skill) => (
              <Grid key={skill.name} id={skill.name} item>
                <SkillCard
                  name={skill.name}
                  years={yearsFrom(skill.years)}
                  body={skill.body}
                  logo_src={skill.logo}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <>
            {skills.map((skill) => (
              <SkillAccordian
                key={skill.name}
                id={skill.name}
                name={skill.name}
                years={yearsFrom(skill.years)}
                body={skill.body}
              />
            ))}
          </>
        )}
      </div>
    </Template>
  );
}
