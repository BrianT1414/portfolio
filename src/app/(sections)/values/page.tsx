import Value from "@/components/Value";
import Template from "../template";
import { values } from "./value_data";

const description = (
  <>
    There are professional values that every person should hold such as
    &quot;integrity&quot;, &quot;respect&quot;, and &quot;reliability&quot;.
    Unfortunately, they tend to be easy to write but hard to prove without
    first-hand experience with a person. Therefore my purpose here is to list
    and describe my professional values in a more specific and meaningful way.
    These are traits that I value about myself, my work, team, or work
    environment.
  </>
);

export default function Values() {
  return (
    <Template title="Professional Values" description={description}>
      <div style={{ maxWidth: 600, margin: "auto", marginBottom: 30 }}>
        {values.map((value) => (
          <Value key={value.name} name={value.name} body={value.body} />
        ))}
      </div>
    </Template>
  );
}
