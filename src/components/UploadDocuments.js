import React, { useContext, useState } from "react";
import { DashboardContext } from "../context/DashboardContext";
import "./UploadDocuments.scss";

export default function UploadDocuments() {
  const { addDocuments } = useContext(DashboardContext);
  const [files, setFiles] = useState([]);

  const onPick = (e) => setFiles(Array.from(e.target.files || []));
  const onUpload = () => {
    if (!files.length) return;
    addDocuments(files);
    setFiles([]);
  };

  return (
    <div className="upload-documents">
      <div className="section-header">
        <h1>Upload Documents</h1>
        <p>Select files to add to your knowledge base.</p>
      </div>

      <div className="upload-card dashboard-card">
        <div className="picker-row">
          <label className="btn-primary-like" htmlFor="file-input">Browse Files</label>
          <input id="file-input" type="file" multiple onChange={onPick} />
          <button className="btn-accent" onClick={onUpload} disabled={!files.length}>Upload</button>
        </div>

        {files.length > 0 && (
          <div className="selected-list">
            {files.map((f, i) => (
              <div className="file-pill" key={i}>
                <span className="name">{f.name}</span>
                <span className="meta">{(f.size / (1024 * 1024)).toFixed(2)} MB</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
