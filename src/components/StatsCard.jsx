export default function StatsCard({ title, value, subtitle }) {
  return (
    <div
      style={{
        background: "#0f172a",
        borderRadius: "12px",
        padding: "16px",
        minWidth: "220px",
      }}
    >
      <h4 style={{ opacity: 0.7, marginBottom: "6px" }}>{title}</h4>
      <div style={{ fontSize: "28px", fontWeight: 700 }}>{value}</div>
      {subtitle && (
        <div style={{ opacity: 0.6, marginTop: "4px" }}>{subtitle}</div>
      )}
    </div>
  );
}
