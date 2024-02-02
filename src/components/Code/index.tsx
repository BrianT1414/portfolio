export default function Code({ children }: { children: React.ReactNode }) {
  return (
    <code style={{ background: "lightGrey", padding: "0px 5px" }}>
      {children}
    </code>
  );
}
