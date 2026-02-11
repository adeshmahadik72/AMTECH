import { useParams } from "react-router-dom";
import AppShell from "../components/AppShell";
import VideoPlayer from "../components/VideoPlayer";

export default function Learning() {
  const { className, subject } = useParams();

  return (
    <AppShell>
      <h1 style={{ marginBottom: "12px" }}>
        {decodeURIComponent(className)} — {decodeURIComponent(subject)}
      </h1>

      <VideoPlayer />

      <div
        style={{
          marginTop: "16px",
          background: "#0f172a",
          padding: "16px",
          borderRadius: "12px",
        }}
      >
        <h3 style={{ marginBottom: "8px" }}>Resources</h3>
        <ul style={{ lineHeight: "1.8", opacity: 0.8 }}>
          <li>Notes (PDF)</li>
          <li>Practice Quiz</li>
          <li>Quick Revision</li>
        </ul>
      </div>
    </AppShell>
  );
}
