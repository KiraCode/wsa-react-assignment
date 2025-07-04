import React from "react";

export default function TaskItem({ task, onDelete }) {
  return (
    <div className="task-card">
      <p className="task-text">{task.text}</p>
      <button className="btn delete-btn" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
}
