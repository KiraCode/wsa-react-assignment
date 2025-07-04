import React, { useState } from "react";

export default function MoodForm({ onAdd }) {
  const [mood, setMood] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = () => {
    onAdd(mood, desc);
    setMood("");
    setDesc("");
  };

  return (
    <div className="mood-form">
      <h1>Mood Tracker 😊</h1>

      <input
        type="text"
        placeholder="How are you feeling?"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
      />

      <textarea
        placeholder="Add a note..."
        rows="3"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>

      <button onClick={handleSubmit}>Log Mood</button>
    </div>
  );
}
