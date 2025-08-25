import React, { createContext, useMemo, useState } from "react";

export const DashboardContext = createContext(null);

export const DashboardProvider = ({ children }) => {
  const [notifications, setNotifications] = useState(2);
  const [documents, setDocuments] = useState([]);
  const [stats, setStats] = useState({
    totalDocuments: 0,
    vectorChunks: 45,
    totalConversations: 7,
    storageUsedMB: 0.1,
    topQuestion: { text: "what is the vacation policy?", asks: 10, period: "7d" },
    topSearch: { text: "vacation policy", searches: 5, period: "7d" },
    mostViewed: { file: "e8aa5ae6-ffbe-44a5-9597-f3a728b36533.docx", views: 49, period: "all time" },
    systemStatus: {
      vectorDB: { status: "online", details: "35 chunks ready" },
      ragSystem: { status: "online", details: "Question answering operational" },
      documentProcessing: { status: "ready", details: "Ready to process uploads" }
    }
  });

  const bytesToMB = (bytes) => +(bytes / (1024 * 1024)).toFixed(1);

  const addDocuments = (fileList) => {
    const next = Array.from(fileList).map((f, i) => ({
      id: `${Date.now()}-${i}`,
      name: f.name,
      size: f.size,
      type: f.type || "file",
      uploadedAt: new Date().toISOString(),
    }));
    setDocuments((prev) => {
      const merged = [...prev, ...next];
      
      const totalSizeMB = merged.reduce((sum, d) => sum + bytesToMB(d.size), 0);
      setStats((s) => ({
        ...s,
        totalDocuments: merged.length,
        storageUsedMB: +(0.1 + totalSizeMB).toFixed(1), 
      }));
      return merged;
    });
    
    setNotifications((n) => n + next.length);
  };

  const value = useMemo(
    () => ({
      notifications, setNotifications,
      documents, addDocuments,
      stats, setStats,
    }),
    [notifications, documents, stats]
  );

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
};
