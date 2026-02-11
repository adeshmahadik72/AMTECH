import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const link = ({ isActive }) => ({
    display: "block",
    padding: "12px 14px",
    marginBottom: "8px",
    borderRadius: "8px",
    background: isActive ? "#0f172a" : "transparent",
    color: "#ffffff",
    textDecoration: "none",
  });

  return (
    <aside
      style={{
        width: "220px",
        minHeight: "100vh",
        background: "#020617",
        padding: "16px",
        borderRight: "1px solid #1e293b",
      }}
    >
      <h2 style={{ marginBottom: "24px" }}>AMTECH</h2>

      <NavLink to="/dashboard" style={link}>Dashboard</NavLink>
      <NavLink to="/mock" style={link}>Mock Tests</NavLink>
      <NavLink to="/reports" style={link}>Reports</NavLink>
      <NavLink to="/contact" style={link}>Contact</NavLink>
    </aside>
  );
}
