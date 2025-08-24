import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTachometerAlt,
  faFileAlt,
  faUpload,
  faUsers,
  faShareAlt
} from '@fortawesome/free-solid-svg-icons';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <div className="nav-section">
          <div className="nav-item">
            <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
            <span className="nav-text">Dashboard</span>
            <span className="badge-new">New</span>
          </div>
        </div>
        
        <div className="nav-section">
          <h3 className="nav-section-title">Content Management</h3>
          <div className="nav-item">
            <FontAwesomeIcon icon={faFileAlt} className="nav-icon" />
            <span className="nav-text">All Documents</span>
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faUpload} className="nav-icon" />
            <span className="nav-text">Upload Documents</span>
          </div>
        </div>
        
        <div className="nav-section">
          <h3 className="nav-section-title">Administration</h3>
          <div className="nav-item">
            <FontAwesomeIcon icon={faUsers} className="nav-icon" />
            <span className="nav-text">User Management</span>
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faShareAlt} className="nav-icon" />
            <span className="nav-text">SharePoint Online</span>
            <span className="status-active">Active</span>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
