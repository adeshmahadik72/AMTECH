import { BrowserRouter, Routes, Route } from "react-router-dom";

import Intro from "../pages/Intro";
import Dashboard from "../pages/Dashboard";
import Learning from "../pages/Learning";
import Mock from "../pages/Mock";
import Reports from "../pages/Reports";
import Contact from "../pages/Contact";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/learn" element={<Learning />} />
        <Route path="/mock" element={<Mock />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
