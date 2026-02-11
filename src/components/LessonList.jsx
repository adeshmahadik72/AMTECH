import { LESSONS } from "../data/lessons";

export default function LessonList({ onSelect }) {
  return (
    <div>
      {LESSONS.map((l, i) => (
        <div
          key={i}
          onClick={() => onSelect(l.title)}
          style={{
            padding: "12px 14px",
            background: "#020617",
            borderRadius: "10px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
        >
          <span>{l.title}</span>
          <span style={{ opacity: 0.6 }}>{l.duration}</span>
        </div>
      ))}
    </div>
  );
}
