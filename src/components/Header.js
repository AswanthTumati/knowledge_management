import React, { useContext } from 'react';
import { DashboardContext } from '../context/DashboardContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faCog, 
  faClock, 
  faBell 
} from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

const Header = () => {

    const { notifications } = useContext(DashboardContext);

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-section">
          <div className="logo">TR</div>
          <div className="brand-text">
            <h1>Knowledge Management</h1>
            <p>Enterprise Search Platform</p>
          </div>
        </div>
      </div>
      
      <div className="header-center">
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search across all knowledge repositories..." 
            className="search-input"
          />
          <button className="ok-button">OK</button>
        </div>
      </div>
      
      <div className="header-right">
        <div className="header-actions">
          <button className="action-btn"><FontAwesomeIcon icon={faCog} /></button>
          <button className="action-btn"><FontAwesomeIcon icon={faClock} /></button>
          <button className="action-btn notification-btn">
            <FontAwesomeIcon icon={faBell} />
            {notifications > 0 && <span className="notification-badge">{notifications}</span>}
          </button>
        </div>
        
        <div className="user-profile">
          <div className="user-info">
            <span className="user-name">System Administrator</span>
          </div>
          <div className="user-avatar">
            <img src="https://via.placeholder.com/32x32/ff6b35/ffffff?text=SA" alt="User Avatar" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
