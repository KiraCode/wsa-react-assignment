import React, { useState } from "react";
import MoodForm from "./components/MoodForm";
import MoodHistory from "./components/MoodHistory";

export default function App() {
  const [items, setItems] = useState([]);

  const handleAddMood = (mood, desc) => {
    if (!mood.trim() && !desc.trim()) return;
    const item = { id: Date.now(), mood, desc };
    setItems((prev) => [...prev, item]);
  };

  return (
    <div className="mood-app">
      <MoodForm onAdd={handleAddMood} />
      <MoodHistory items={items} />
    </div>
  );
}
