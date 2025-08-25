import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { DashboardProvider } from "./context/DashboardContext";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import UploadDocuments from "./components/UploadDocuments";
import AllDocuments from "./components/AllDocuments";
import UserManagement from "./components/UserManagement";
import SharePointOnline from "./components/SharePointOnline";
import "./App.scss";


//const UserManagement = () => <div className="dashboard-card" style={{padding:"1.5rem"}}>User Management</div>;
//const SharePointOnline = () => <div className="dashboard-card" style={{padding:"1.5rem"}}>SharePoint Online</div>;


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
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/upload" element={<UploadDocuments />} />
                <Route path="/documents" element={<AllDocuments />} />
                <Route path="/users" element={<UserManagement />} />
                <Route path="/sharepoint" element={<SharePointOnline />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </DashboardProvider>
  );
}
