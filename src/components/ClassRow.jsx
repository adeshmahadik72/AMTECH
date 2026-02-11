import SubjectCard from "./SubjectCard";

export default function ClassRow({ className, subjects, onSelect }) {
  return (
    <div style={{ marginBottom: "40px" }}>
      <h2 style={{ marginBottom: "14px" }}>{className}</h2>

      <div
        style={{
          display: "flex",
          gap: "18px",
          overflowX: "auto",
          paddingBottom: "10px",
          scrollBehavior: "smooth",
        }}
      >
        {subjects.map((sub) => (
          <SubjectCard
            key={sub}
            name={sub}
            onClick={() => onSelect(className, sub)}
          />
        ))}
      </div>
    </div>
  );
}
