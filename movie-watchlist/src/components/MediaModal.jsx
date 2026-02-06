import React from "react";
import "../styles/Modal.css";

export default function MediaModal({ item, onClose }) {
  if (!item) return null;

  const img = item.poster_path
    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
    : "";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        {img && <img src={img} alt={item.title || item.name} />}
        <h2>{item.title || item.name}</h2>
        {item.release_date && <p>Release: {item.release_date}</p>}
        {item.first_air_date && <p>First Air: {item.first_air_date}</p>}
        {item.overview && <p>{item.overview}</p>}
      </div>
    </div>
  );
}
