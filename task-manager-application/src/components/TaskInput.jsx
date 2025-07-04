import React, { useState } from "react";

export default function TaskInput({ onAddTask }) {
  const [input, setInput] = useState("");

  function handleAdd() {
    if (input.trim() === "") return;
    onAddTask(input.trim());
    setInput("");
  }

  return (
    <div className="task-container">
      <h1>Task Manager</h1>
      <div className="input-area">
        <input
          type="text"
          placeholder="Enter a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn" onClick={handleAdd}>
          Add Task
        </button>
      </div>
    </div>
  );
}
