import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";
import Footer from "./Footer";

export default function AppShell({ children }) {
  return (
    <div style={{ minHeight: "100vh", background: "#020617" }}>
      {/* Mobile Header */}
      <div className="mobile-only">
        <MobileHeader />
      </div>

      <div style={{ display: "flex", minHeight: "calc(100vh - 56px)" }}>
        {/* Desktop Sidebar */}
        <div className="desktop-only">
          <Sidebar />
        </div>

        <main
          style={{
            flex: 1,
            padding: "32px",
            color: "#ffffff",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ flex: 1 }}>{children}</div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
