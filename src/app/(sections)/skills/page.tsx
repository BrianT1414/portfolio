import Skill from "@/components/Skill";
import Template from "../template";
import { skills } from "./skill_data";

const description =
  "Below I have provided a list of specific skills I have aquired in my career. A simple list of skills and years of experience only provides the most cursory view of proficiency; so I have also included expandable sections where I describe my experience, anecdotes, and opinions in an attempt to demonstrate my actual competency and experience in each area.";

export default function Skills() {
  return (
    <Template title="Skills" description={description}>
      <div style={{ maxWidth: 600, margin: "auto", marginBottom: 30 }}>
        {skills.map((skill) => (
          <Skill
            key={skill.name}
            name={skill.name}
            years={skill.years}
            body={skill.body}
          />
        ))}
      </div>
    </Template>
  );
}
