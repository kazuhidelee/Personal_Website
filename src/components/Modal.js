import React from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, project }) {
  if (!isOpen) return null;

  return (
    <div className="modal_overlay" onClick={onClose}>
      <div className="modal_content" onClick={e => e.stopPropagation()}>
        <button className="modal_close" onClick={onClose}>×</button>
        <h2>{project.projectName}</h2>
        <p><strong>Category:</strong> {project.category}</p>
        <p><strong>Date:</strong> {project.date}</p>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </div>
  );
}

export default Modal;
