import { useState } from "react";
import LessonList from "./LessonList";
import QuizPanel from "./QuizPanel";

export default function Tabs({ onLessonChange }) {
  const [active, setActive] = useState("Videos");
  const tabs = ["Videos", "Notes", "Quiz", "Revision"];

  return (
    <>
      <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            style={{
              padding: "10px 14px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              background: active === t ? "#4f46e5" : "#0f172a",
              color: "#fff",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      <div
        style={{
          background: "#0f172a",
          borderRadius: "12px",
          padding: "16px",
        }}
      >
        {active === "Videos" && <LessonList onSelect={onLessonChange} />}
        {active === "Notes" && <p>Downloadable notes will appear here.</p>}
        {active === "Quiz" && <QuizPanel />}
        {active === "Revision" && <p>Fast revision content here.</p>}
      </div>
    </>
  );
}
