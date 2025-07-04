import React from "react";
import MoodItem from "./MoodItem";

export default function MoodHistory({ items }) {
  return (
    <div className="mood-history">
      <h2>Mood History 📜</h2>

      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <MoodItem key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <p className="empty-text">No Mood History</p>
      )}
    </div>
  );
}
