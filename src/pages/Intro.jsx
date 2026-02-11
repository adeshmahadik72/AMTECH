import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Intro() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#ffffff",
      }}
    >
      <div
        style={{
          width: "360px",
          background: "#0f172a",
          padding: "28px",
          borderRadius: "14px",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "6px" }}>
          AMTECH
        </h1>
        <p
          style={{
            textAlign: "center",
            opacity: 0.6,
            marginBottom: "20px",
          }}
        >
          Smart Learning Platform
        </p>

        <input
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "12px",
            borderRadius: "8px",
            border: "1px solid #1e293b",
            background: "#020617",
            color: "#fff",
          }}
        />

        <input
          placeholder="Email or Mobile Number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "18px",
            borderRadius: "8px",
            border: "1px solid #1e293b",
            background: "#020617",
            color: "#fff",
          }}
        />

        <button
          onClick={() => navigate("/dashboard")}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            background: "#4f46e5",
            color: "#ffffff",
            border: "none",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Continue →
        </button>
      </div>
    </div>
  );
}
