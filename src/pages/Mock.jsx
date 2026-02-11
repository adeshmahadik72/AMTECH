import AppShell from "../components/AppShell";

export default function Mock() {
  return (
    <AppShell>
      <h1 style={{ marginBottom: "16px" }}>Mock Tests</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
        }}
      >
        {["10th Class", "9th Class", "8th Class", "7th Class", "6th Class"].map(
          (cls) => (
            <div
              key={cls}
              className="card fade-in"
              style={{ padding: "20px" }}
            >
              <strong>{cls}</strong>
              <p style={{ fontSize: "13px", opacity: 0.6 }}>
                Full syllabus mock test
              </p>
            </div>
          )
        )}
      </div>
    </AppShell>
  );
}
