import React, { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import "./AllDocuments.scss";

const fmtDate = (iso) =>
  new Date(iso).toLocaleString([], { dateStyle: "medium", timeStyle: "short" });

const fmtSize = (bytes) => `${(bytes / (1024 * 1024)).toFixed(2)} MB`;

export default function AllDocuments() {
  const { documents } = useContext(DashboardContext);

  return (
    <div className="all-documents">
      <div className="section-header">
        <h1>All Documents</h1>
        <p>Previously uploaded files</p>
      </div>

      <div className="documents-card dashboard-card">
        {documents.length === 0 ? (
          <div className="empty-state">
            <p>No documents yet. Upload some from <strong>Upload Documents</strong>.</p>
          </div>
        ) : (
          <table className="documents-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Size</th>
                <th>Uploaded</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((d) => (
                <tr key={d.id}>
                  <td className="name">{d.name}</td>
                  <td>{d.type || "file"}</td>
                  <td>{fmtSize(d.size)}</td>
                  <td>{fmtDate(d.uploadedAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
