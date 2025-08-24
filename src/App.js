import React, {useState, useEffect} from 'react';
import './App.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {

    const [dashboardData, setDashboardData] = useState({
    totalDocuments: 0,
    vectorChunks: 0,
    totalConversations: 0,
    storageUsed: "0 MB",
    topQuestion: { text: "", asks: 0, period: "7d" },
    topSearch: { text: "", searches: 0, period: "7d" },
    mostViewed: { file: "", views: 0, period: "all time" },
    systemStatus: {
      vectorDB: { status: "offline", details: "" },
      ragSystem: { status: "offline", details: "" },
      documentProcessing: { status: "offline", details: "" }
    },
    notifications: 0
  });

  useEffect(() => {
    
    const mockData = {
      totalDocuments: 7,
      vectorChunks: 45,
      totalConversations: 59,
      storageUsed: "4.3 MB",
      topQuestion: { text: "what is the vacation policy?", asks: 15, period: "7d" },
      topSearch: { text: "vacation policy", searches: 18, period: "7d" },
      mostViewed: { file: "e8aa5ae6-ffbe-44a5-9597-f3a728b36533.docx", views: 49, period: "all time" },
      systemStatus: {
        vectorDB: { status: "online", details: "80 chunks ready" },
        ragSystem: { status: "online", details: "Question answering operational" },
        documentProcessing: { status: "ready", details: "Ready to process uploads" }
      },
      notifications: 5
    };

    setDashboardData(mockData);
  }, []);

  return (
    <div className="app">
      <Header notifications={dashboardData.notifications}/>
      <div className="main-container">
        <Sidebar />
        <main className="main-content">
          <Dashboard  
            dashboardData={dashboardData}
            setDashboardData={setDashboardData}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
