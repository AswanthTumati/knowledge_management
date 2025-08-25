import React, { useContext } from 'react';
import { DashboardContext } from '../context/DashboardContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faDatabase, faUsers, faChartLine, faQuestionCircle, faSearch, faEye, faCheckCircle, faSync } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.scss';

export default function Dashboard() {
  const { stats } = useContext(DashboardContext);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-title">
          <h1>Dashboard</h1>
          <p>Welcome back! Here's what's happening with your knowledge management system.</p>
        </div>
        <div className="dashboard-controls">
          <select className="time-filter">
            <option>Today</option><option>Last 7 days</option><option>Last 30 days</option>
          </select>
          <button className="refresh-btn"><FontAwesomeIcon icon={faSync} />Refresh</button>
        </div>
      </div>

      
      <div className="metrics-grid">
        <div className="metric-card dashboard-card">
          <div className="metric-content">
            <div className="icon-wrapper bg-primary-light"><FontAwesomeIcon icon={faFileAlt} /></div>
            <div className="metric-info"><h3>Total Documents</h3><p className="metric-value">{stats.totalDocuments}</p></div>
          </div>
        </div>
        <div className="metric-card dashboard-card">
          <div className="metric-content">
            <div className="icon-wrapper bg-success-light"><FontAwesomeIcon icon={faDatabase} /></div>
            <div className="metric-info"><h3>Vector Chunks</h3><p className="metric-value">{stats.vectorChunks}</p></div>
          </div>
        </div>
        <div className="metric-card dashboard-card">
          <div className="metric-content">
            <div className="icon-wrapper bg-warning-light"><FontAwesomeIcon icon={faUsers} /></div>
            <div className="metric-info"><h3>Total Conversations</h3><p className="metric-value">{stats.totalConversations}</p></div>
          </div>
        </div>
        <div className="metric-card dashboard-card">
          <div className="metric-content">
            <div className="icon-wrapper bg-info-light"><FontAwesomeIcon icon={faChartLine} /></div>
            <div className="metric-info"><h3>Storage Used</h3><p className="metric-value">{stats.storageUsedMB} MB</p></div>
          </div>
        </div>
      </div>

      
      <div className="activity-insights">
        <div className="insight-card dashboard-card">
          <div className="insight-header"><FontAwesomeIcon icon={faQuestionCircle} className="insight-icon" /><h3>TOP QUESTION</h3></div>
          <div className="insight-content">
            <p className="insight-text">"{stats.topQuestion.text}"</p>
            <div className="insight-meta"><span className="insight-count">{stats.topQuestion.asks} asks</span><span className="insight-period">{stats.topQuestion.period}</span></div>
          </div>
        </div>

        <div className="insight-card dashboard-card">
          <div className="insight-header"><FontAwesomeIcon icon={faSearch} className="insight-icon" /><h3>TOP SEARCH</h3></div>
          <div className="insight-content">
            <p className="insight-text">"{stats.topSearch.text}"</p>
            <div className="insight-meta"><span className="insight-count">{stats.topSearch.searches} searches</span><span className="insight-period">{stats.topSearch.period}</span></div>
          </div>
        </div>

        <div className="insight-card dashboard-card">
          <div className="insight-header"><FontAwesomeIcon icon={faEye} className="insight-icon" /><h3>MOST VIEWED</h3></div>
          <div className="insight-content">
            <p className="insight-text">{stats.mostViewed.file}</p>
            <div className="insight-meta"><span className="insight-count">{stats.mostViewed.views} views</span><span className="insight-period">{stats.mostViewed.period}</span></div>
          </div>
        </div>
      </div>

      
      <div className="overview-grid">
        <div className="overview-card dashboard-card">
          <h3>Knowledge base summary</h3>
          <div className="overview-metrics">
            <div className="overview-metric"><div className="overview-icon"><FontAwesomeIcon icon={faFileAlt} /></div><div className="overview-info"><span className="overview-label">Total Documents</span><span className="overview-value">{stats.totalDocuments}</span></div></div>
            <div className="overview-metric"><div className="overview-icon"><FontAwesomeIcon icon={faDatabase} /></div><div className="overview-info"><span className="overview-label">Vector Chunks</span><span className="overview-value">{stats.vectorChunks}</span></div></div>
            <div className="overview-metric"><div className="overview-icon"><FontAwesomeIcon icon={faChartLine} /></div><div className="overview-info"><span className="overview-label">Storage Used</span><span className="overview-value">{stats.storageUsedMB} MB</span></div></div>
          </div>
        </div>

        <div className="overview-card dashboard-card">
          <h3>Vector database and service health</h3>
          <div className="system-status">
            {[
              { label: "Vector Database", data: stats.systemStatus.vectorDB, cls: "status-online" },
              { label: "RAG System", data: stats.systemStatus.ragSystem, cls: "status-online" },
              { label: "Document Processing", data: stats.systemStatus.documentProcessing, cls: "status-ready" },
            ].map(({ label, data, cls }, i) => (
              <div className="status-item" key={i}>
                <div className="status-icon"><FontAwesomeIcon icon={faCheckCircle} className={data.status === "online" ? "status-online" : data.status === "ready" ? "status-ready" : ""} /></div>
                <div className="status-info">
                  <span className="status-label">{label}</span>
                  <span className="status-value">{data.details}</span>
                  <span className={`status-indicator ${cls}`}>{data.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
