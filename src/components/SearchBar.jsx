import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        placeholder="Search subject or lesson…"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
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
        }}
      />
    </div>
  );
}
