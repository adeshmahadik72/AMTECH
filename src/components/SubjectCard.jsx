export default function SubjectCard({ name, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        minWidth: "200px",
        padding: "18px",
        background: "linear-gradient(145deg, #020617, #0f172a)",
        borderRadius: "14px",
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow =
          "0 10px 25px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <h3 style={{ marginBottom: "6px" }}>{name}</h3>
      <p style={{ opacity: 0.65, fontSize: "14px" }}>
        Videos · Notes · Quiz · Revision
      </p>
    </div>
  );
}
