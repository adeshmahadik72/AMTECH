export default function Footer() {
  return (
    <div
      style={{
        marginTop: "32px",
        paddingTop: "16px",
        borderTop: "1px solid #1e293b",
        textAlign: "center",
        fontSize: "13px",
        opacity: 0.6,
      }}
    >
      © {new Date().getFullYear()} AMTECH TUITIONS · All Rights Reserved
    </div>
  );
}
