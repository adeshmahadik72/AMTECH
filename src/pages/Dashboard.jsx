import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AppShell from "../components/AppShell";
import TopSearch from "../components/TopSearch";
import Badge from "../components/Badge";
import ProgressBar from "../components/ProgressBar";

export default function Dashboard() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const classes = [
    { name: "10th Class", subjects: ["Maths", "Physics", "Chemistry", "Biology"] },
    { name: "9th Class", subjects: ["Maths", "Physics", "Chemistry", "Biology"] },
    { name: "8th Class", subjects: ["Maths", "Science"] },
    { name: "7th Class", subjects: ["Maths", "Science"] },
    { name: "6th Class", subjects: ["Maths", "Science"] },
  ];

  const match = (text) =>
    text.toLowerCase().includes(query.toLowerCase());

  return (
    <AppShell>
      <h1 style={{ marginBottom: "16px" }}>Dashboard</h1>

      <TopSearch onSearch={setQuery} />

      <div
        className="card fade-in"
        style={{ padding: "16px", marginBottom: "24px" }}
      >
        <strong>Overall Progress</strong>
        <div style={{ marginTop: "8px" }}>
          <ProgressBar value={42} />
        </div>
      </div>

      {classes.map((cls) => {
        const filtered = cls.subjects.filter(match);
        if (!filtered.length) return null;

        return (
          <div key={cls.name} style={{ marginBottom: "36px" }}>
            <h2 style={{ marginBottom: "14px" }}>
              {cls.name}
              <Badge text={`${filtered.length} subjects`} />
            </h2>

            <div
              style={{
                display: "flex",
                gap: "16px",
                overflowX: "auto",
                paddingBottom: "8px",
              }}
            >
              {filtered.map((sub) => (
                <div
                  key={sub}
                  onClick={() =>
                    navigate(
                      `/learn/${encodeURIComponent(
                        cls.name
                      )}/${encodeURIComponent(sub)}`
                    )
                  }
                  className="card fade-in"
                  style={{
                    minWidth: "190px",
                    padding: "18px",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  <strong>{sub}</strong>
                  <p style={{ fontSize: "13px", opacity: 0.6 }}>
                    Videos • Notes • Quiz
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </AppShell>
  );
}
