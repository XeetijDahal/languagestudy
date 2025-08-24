import React, { useState } from "react";
import "./AddWordModal.css";

function AddWordModal({ show, onClose, onAdd }) {
  const [english, setEnglish] = useState("");
  const [nepali, setNepali] = useState("");
  const [german, setGerman] = useState("");

  const handleSubmit = () => {
    if (!english || !nepali || !german) return alert("All fields required");
    onAdd({ english, nepali, german });
    setEnglish(""); setNepali(""); setGerman("");
    onClose();
  };

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Word</h2>
        <input
          placeholder="English"
          value={english}
          onChange={(e) => setEnglish(e.target.value)}
        />
        <input
          placeholder="Nepali"
          value={nepali}
          onChange={(e) => setNepali(e.target.value)}
        />
        <input
          placeholder="German"
          value={german}
          onChange={(e) => setGerman(e.target.value)}
        />
        <div className="modal-actions">
          <button className="save-btn" onClick={handleSubmit}>
            Save
          </button>
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddWordModal;
