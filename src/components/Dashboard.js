import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFileAlt,
  faDatabase,
  faUsers,
  faChartLine,
  faQuestionCircle,
  faSearch,
  faEye,
  faCheckCircle,
  faSync
} from '@fortawesome/free-solid-svg-icons';
import './Dashboard.scss';

const Dashboard = ({ dashboardData, setDashboardData }) => {

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-title">
          <h1>Dashboard</h1>
          <p>Welcome back! Here's what's happening with your knowledge management system.</p>
        </div>
        <div className="dashboard-controls">
          <select className="time-filter">
            <option>Today</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
          <button className="refresh-btn">
            <FontAwesomeIcon icon={faSync} />
            Refresh
          </button>
        </div>
      </div>

      
      <div className="metrics-grid">
        <div className="metric-card dashboard-card">
          <div className="metric-content">
            <div className="icon-wrapper bg-primary-light">
              <FontAwesomeIcon icon={faFileAlt} />
            </div>
            <div className="metric-info">
              <h3>total Documents</h3>
              <p className="metric-value">{dashboardData.totalDocuments}</p>
            </div>
          </div>
        </div>

        <div className="metric-card dashboard-card">
          <div className="metric-content">
            <div className="icon-wrapper bg-success-light">
              <FontAwesomeIcon icon={faDatabase} />
            </div>
            <div className="metric-info">
              <h3>Vector Chunks</h3>
              <p className="metric-value">{dashboardData.vectorChunks}</p>
            </div>
          </div>
        </div>

        <div className="metric-card dashboard-card">
          <div className="metric-content">
            <div className="icon-wrapper bg-warning-light">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <div className="metric-info">
              <h3>Total Conversations</h3>
              <p className="metric-value">{dashboardData.totalConversations}</p>
            </div>
          </div>
        </div>

        <div className="metric-card dashboard-card">
          <div className="metric-content">
            <div className="icon-wrapper bg-info-light">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <div className="metric-info">
              <h3>Storage Used</h3>
              <p className="metric-value">{dashboardData.storageUsed}</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="activity-insights">
        <div className="insight-card dashboard-card">
          <div className="insight-header">
            <FontAwesomeIcon icon={faQuestionCircle} className="insight-icon" />
            <h3>TOP QUESTION</h3>
          </div>
          <div className="insight-content">
            <p className="insight-text">"{dashboardData.topQuestion.text}"</p>
            <div className="insight-meta">
              <span className="insight-count">{dashboardData.topQuestion.asks} asks</span>
              <span className="insight-period">{dashboardData.topQuestion.period}</span>
            </div>
          </div>
        </div>

        <div className="insight-card dashboard-card">
          <div className="insight-header">
            <FontAwesomeIcon icon={faSearch} className="insight-icon" />
            <h3>TOP SEARCH</h3>
          </div>
          <div className="insight-content">
            <p className="insight-text">"{dashboardData.topSearch.text}"</p>
            <div className="insight-meta">
              <span className="insight-count">{dashboardData.topSearch.searches} searches</span>
              <span className="insight-period">{dashboardData.topSearch.period}</span>
            </div>
          </div>
        </div>

        <div className="insight-card dashboard-card">
          <div className="insight-header">
            <FontAwesomeIcon icon={faEye} className="insight-icon" />
            <h3>MOST VIEWED</h3>
          </div>
          <div className="insight-content">
            <p className="insight-text">{dashboardData.mostViewed.file}</p>
            <div className="insight-meta">
              <span className="insight-count">{dashboardData.mostViewed.views} views</span>
              <span className="insight-period">{dashboardData.mostViewed.period}</span>
            </div>
          </div>
        </div>
      </div>

      
      <div className="overview-grid">
        <div className="overview-card dashboard-card">
          <h3>Knowledge base summary</h3>
          <div className="overview-metrics">
            <div className="overview-metric">
              <div className="overview-icon">
                <FontAwesomeIcon icon={faFileAlt} />
              </div>
              <div className="overview-info">
                <span className="overview-label">Total Documents</span>
                <span className="overview-value">{dashboardData.totalDocuments}</span>
              </div>
            </div>
            <div className="overview-metric">
              <div className="overview-icon">
                <FontAwesomeIcon icon={faDatabase} />
              </div>
              <div className="overview-info">
                <span className="overview-label">Vector Chunks</span>
                <span className="overview-value">{dashboardData.vectorChunks}</span>
              </div>
            </div>
            <div className="overview-metric">
              <div className="overview-icon">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <div className="overview-info">
                <span className="overview-label">Storage Used</span>
                <span className="overview-value">{dashboardData.storageUsed}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="overview-card dashboard-card">
          <h3>Vector database and service health</h3>
          <div className="system-status">
            <div className="status-item">
              <div className="status-icon">
                <FontAwesomeIcon icon={faCheckCircle} className="status-online" />
              </div>
              <div className="status-info">
                <span className="status-label">Vector Database</span>
                <span className="status-value">{dashboardData.systemStatus.vectorDB.details}</span>
                <span className="status-indicator status-online">{dashboardData.systemStatus.vectorDB.status}</span>
              </div>
            </div>
            <div className="status-item">
              <div className="status-icon">
                <FontAwesomeIcon icon={faCheckCircle} className="status-online" />
              </div>
              <div className="status-info">
                <span className="status-label">RAG System</span>
                <span className="status-value">{dashboardData.systemStatus.ragSystem.details}</span>
                <span className="status-indicator status-online">{dashboardData.systemStatus.ragSystem.status}</span>
              </div>
            </div>
            <div className="status-item">
              <div className="status-icon">
                <FontAwesomeIcon icon={faCheckCircle} className="status-ready" />
              </div>
              <div className="status-info">
                <span className="status-label">Document Processing</span>
                <span className="status-value">{dashboardData.systemStatus.documentProcessing.details}</span>
                <span className="status-indicator status-ready">{dashboardData.systemStatus.documentProcessing.status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
