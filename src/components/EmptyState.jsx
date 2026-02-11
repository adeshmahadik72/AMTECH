export default function EmptyState({ title = "Nothing here yet", subtitle }) {
  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
        opacity: 0.7,
        border: "1px dashed #1e293b",
        borderRadius: "12px",
      }}
    >
      <h3 style={{ marginBottom: "8px" }}>{title}</h3>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}