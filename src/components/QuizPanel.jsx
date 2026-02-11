export default function QuizPanel() {
  return (
    <div
      style={{
        marginTop: "20px",
        background: "#0f172a",
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>Quick Quiz</h3>

      <p style={{ marginBottom: "12px" }}>
        1. What is the value of π (approx)?
      </p>

      {["2.14", "3.14", "4.14", "3.41"].map((opt) => (
        <label
          key={opt}
          style={{
            display: "block",
            padding: "8px",
            background: "#020617",
            borderRadius: "8px",
            marginBottom: "6px",
            cursor: "pointer",
          }}
        >
          <input type="radio" name="q1" style={{ marginRight: "8px" }} />
          {opt}
        </label>
      ))}

      <button
        style={{
          marginTop: "12px",
          padding: "10px 14px",
          borderRadius: "8px",
          border: "none",
          background: "#4f46e5",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Submit Quiz
      </button>
    </div>
  );
}
