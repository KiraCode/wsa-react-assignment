import React from "react";

export default function MoodItem({ item }) {
  return (
    <li className="mood-item">
      <p className="mood-text">{item.mood}</p>
      <p className="desc-text">{item.desc}</p>
    </li>
  );
}
