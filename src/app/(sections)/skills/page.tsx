import Template from "../template";

const description =
  "Below I have provided a list of specific skills I have aquired in my career. A simple list of skills and years of experience only provides the most cursory view of proficiency; so I have also included expandable sections where I describe my experience in an attempt to demonstrate my actual competency in each area.";

export default function Skills() {
  return (
    <Template title="Skills" description={description}>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Next.JS</li>
        <li>Node</li>
        <li>Laravel</li>
        <li>PHP</li>
        <li>Docker</li>
        <li>GitLab CI</li>
        <li>GitHub Actions</li>
        <li>MySQL</li>
        <li>React Testing Library</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Java/Spring</li>
      </ul>
    </Template>
  );
}
