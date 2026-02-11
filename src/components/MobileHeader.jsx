import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  const linkStyle = {
    display: "block",
    padding: "14px 16px",
    color: "#ffffff",
    textDecoration: "none",
    borderBottom: "1px solid #1e293b",
  };

  return (
    <>
      <div
        style={{
          height: "56px",
          background: "#020617",
          borderBottom: "1px solid #1e293b",
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
        }}
      >
        <button
          onClick={() => setOpen(true)}
          style={{
            background: "transparent",
            border: "1px solid #1e293b",
            color: "#ffffff",
            padding: "6px 10px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          ☰
        </button>

        <h3 style={{ marginLeft: "16px" }}>AMTECH</h3>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            zIndex: 100,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "240px",
              height: "100%",
              background: "#020617",
            }}
          >
            <NavLink to="/dashboard" style={linkStyle} onClick={() => setOpen(false)}>
              Dashboard
            </NavLink>
            <NavLink to="/mock" style={linkStyle} onClick={() => setOpen(false)}>
              Mock Tests
            </NavLink>
            <NavLink to="/reports" style={linkStyle} onClick={() => setOpen(false)}>
              Reports
            </NavLink>
            <NavLink to="/contact" style={linkStyle} onClick={() => setOpen(false)}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}
