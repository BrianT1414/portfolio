import Template from "../template";

const description =
  'Rather than provide a list of generic professional values such as "integrity", "accountability", and "respect" (all of which I do value), my goal is to provide a list of specific traits that are very important to me. This list is not limited to character traits, but also extends into the types and methods of work I value.';

export default function Values() {
  return (
    <Template title="Professional Values" description={description}>
      <ul>
        <li>Quality</li>
        <li>Ownership</li>
        <li>Purpose</li>
      </ul>
      <ul>
        <li>Developer Experience</li>
        <li>Automation</li>
        <li>Continuous Improvement</li>
        <li>Pragmatism</li>
        <li>Agile</li>
        <li>Collaboration</li>
      </ul>
    </Template>
  );
}
