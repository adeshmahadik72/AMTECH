export default function ProgressBar({ value = 0 }) {
  return (
    <div
      style={{
        width: "100%",
        height: "8px",
        background: "#1e293b",
        borderRadius: "999px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${value}%`,
          height: "100%",
          background: "#4f46e5",
          transition: "width 0.3s ease",
        }}
      />
    </div>
  );
}
