import { useState } from "react";

export default function AIButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          padding: "14px 18px",
          borderRadius: "999px",
          background: "#4f46e5",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
          zIndex: 50,
        }}
      >
        AI
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "0",
            right: "0",
            width: "360px",
            height: "100vh",
            background: "#020617",
            borderLeft: "1px solid #1e293b",
            padding: "16px",
            zIndex: 60,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "12px",
            }}
          >
            <strong>AMTECH AI</strong>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "transparent",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              ✕
            </button>
          </div>

          <div
            style={{
              flex: 1,
              overflowY: "auto",
              background: "#0f172a",
              borderRadius: "10px",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <p style={{ opacity: 0.7 }}>
              Ask doubts about this lesson…
            </p>
          </div>

          <input
            placeholder="Type your question…"
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #1e293b",
              background: "#020617",
              color: "#fff",
            }}
          />
        </div>
      )}
    </>
  );
}
