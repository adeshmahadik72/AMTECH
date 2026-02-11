export default function PerformanceChart() {
  return (
    <div
      style={{
        background: "#0f172a",
        borderRadius: "12px",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <h3 style={{ marginBottom: "12px" }}>Performance Overview</h3>

      <div
        style={{
          height: "160px",
          display: "flex",
          alignItems: "flex-end",
          gap: "12px",
        }}
      >
        {[60, 70, 55, 80, 72].map((v, i) => (
          <div
            key={i}
            style={{
              width: "40px",
              height: `${v}%`,
              background: "#4f46e5",
              borderRadius: "6px",
            }}
          />
        ))}
      </div>

      <p style={{ opacity: 0.6, marginTop: "10px" }}>
        Last 5 quiz scores (%)
      </p>
    </div>
  );
}
