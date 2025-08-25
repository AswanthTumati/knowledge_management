import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faFileAlt, faUpload, faUsers, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import "./Sidebar.scss";

const linkClass = ({ isActive }) => `nav-item ${isActive ? "active" : ""}`;

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <div className="nav-section">
          <NavLink to="/dashboard" end className={linkClass}>
            <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
            <span className="nav-text">Dashboard</span>
            <span className="badge-new">New</span>
          </NavLink>
        </div>

        <div className="nav-section">
          <h3 className="nav-section-title">Content Management</h3>

          <NavLink to="/documents" className={linkClass}>
            <FontAwesomeIcon icon={faFileAlt} className="nav-icon" />
            <span className="nav-text">All Documents</span>
          </NavLink>

          <NavLink to="/upload" className={linkClass}>
            <FontAwesomeIcon icon={faUpload} className="nav-icon" />
            <span className="nav-text">Upload Documents</span>
          </NavLink>
        </div>

        <div className="nav-section">
          <h3 className="nav-section-title">Administration</h3>

          <NavLink to="/users" className={linkClass}>
            <FontAwesomeIcon icon={faUsers} className="nav-icon" />
            <span className="nav-text">User Management</span>
          </NavLink>

          <NavLink to="/sharepoint" className={linkClass}>
            <FontAwesomeIcon icon={faShareAlt} className="nav-icon" />
            <span className="nav-text">SharePoint Online</span>
            <span className="status-active">Active</span>
          </NavLink>
        </div>
      </nav>
    </aside>
  );
}
