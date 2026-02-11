export default function Badge({ text }) {
  return (
    <span
      style={{
        marginLeft: "8px",
        padding: "4px 10px",
        fontSize: "12px",
        borderRadius: "999px",
        background: "#1e293b",
        color: "#ffffff",
        opacity: 0.8,
      }}
    >
      {text}
    </span>
  );
}
