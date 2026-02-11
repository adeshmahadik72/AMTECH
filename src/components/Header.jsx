export default function Header({ title }) {
  return (
    <div
      style={{
        marginBottom: "20px",
        paddingBottom: "12px",
        borderBottom: "1px solid #1e293b",
      }}
    >
      <h1 style={{ fontSize: "24px" }}>{title}</h1>
    </div>
  );
}
