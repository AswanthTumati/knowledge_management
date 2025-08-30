// components/Maintenance.js
import React from "react";
import "./Maintenance.scss";

const Maintenance = () => {
  return (
    <div className="maintenance-page">
      <h2>🚧 Site Under Maintenance 🚧</h2>
      <p>
        Some features are temporarily unavailable while we work on improvements.
      </p>
      <div className="working-sections">
        <h3>✅ Currently Working:</h3>
        <ul>
          <li>📊 Dashboard</li>
          <li>📂 All Documents</li>
          <li>⬆️ Upload Documents</li>
        </ul>
      </div>
      <div className="not-working-sections">
        <h3>🛠️ Under Maintenance:</h3>
        <ul>
          <li>👥 User Management</li>
          <li>☁️ SharePoint Online</li>
        </ul>
      </div>
      <p className="note">Everything is up and running soon 🚀</p>
    </div>
  );
};

export default Maintenance;
