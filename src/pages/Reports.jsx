import AppShell from "../components/AppShell";

export default function Reports() {
  return (
    <AppShell>
      <h1 style={{ marginBottom: "16px" }}>Reports</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
        }}
      >
        <div className="card fade-in" style={{ padding: "20px" }}>
          <strong>Lessons Completed</strong>
          <p style={{ fontSize: "22px", marginTop: "8px" }}>24</p>
        </div>

        <div className="card fade-in" style={{ padding: "20px" }}>
          <strong>Quizzes Attempted</strong>
          <p style={{ fontSize: "22px", marginTop: "8px" }}>18</p>
        </div>

        <div className="card fade-in" style={{ padding: "20px" }}>
          <strong>Average Score</strong>
          <p style={{ fontSize: "22px", marginTop: "8px" }}>72%</p>
        </div>

        <div className="card fade-in" style={{ padding: "20px" }}>
          <strong>Mock Tests</strong>
          <p style={{ fontSize: "22px", marginTop: "8px" }}>3</p>
        </div>
      </div>
    </AppShell>
  );
}
