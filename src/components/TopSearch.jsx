import { useState } from "react";

export default function TopSearch({ onSearch }) {
  const [q, setQ] = useState("");

  return (
    <input
      placeholder="Search lessons, subjects…"
      value={q}
      onChange={(e) => {
        setQ(e.target.value);
        onSearch && onSearch(e.target.value);
      }}
      style={{
        width: "100%",
        maxWidth: "420px",
        padding: "12px",
        borderRadius: "10px",
        border: "1px solid #1e293b",
        background: "#020617",
        color: "#ffffff",
        marginBottom: "20px",
      }}
    />
  );
}
