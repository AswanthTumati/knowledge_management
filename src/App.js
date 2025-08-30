import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { DashboardProvider } from "./context/DashboardContext";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import UploadDocuments from "./components/UploadDocuments";
import AllDocuments from "./components/AllDocuments";
import Maintenance from "./components/Maintenance"; // ✅ New Component Import
import "./App.scss";

export default function App() {
  return (
    <DashboardProvider>
      <Router>
        <div className="app">
          <Header />
          <div className="main-container">
            <Sidebar />
            <main className="main-content">
              <Routes>
                {/* Default redirect */}
                <Route path="/" element={<Navigate to="/dashboard" replace />} />

                {/* Active routes */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/upload" element={<UploadDocuments />} />
                <Route path="/documents" element={<AllDocuments />} />

                {/* Under Maintenance routes */}
                <Route path="/users" element={<Maintenance />} />
                <Route path="/sharepoint" element={<Maintenance />} />

                {/* Catch-all route (optional) */}
                <Route path="*" element={<Maintenance />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </DashboardProvider>
  );
}
