import { Link } from "react-router-dom";

export default function Breadcrumb({ className, subject }) {
  return (
    <div style={{ marginBottom: "12px", opacity: 0.8 }}>
      <Link to="/dashboard">Dashboard</Link>
      <span> / </span>
      <span>{decodeURIComponent(className)}</span>
      <span> / </span>
      <strong>{decodeURIComponent(subject)}</strong>
    </div>
  );
}
