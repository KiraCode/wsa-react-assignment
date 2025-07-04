import React from "react";

export default function RecipeImage({ item }) {
  return (
    <li className="recipe-item">
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.title} />
    </li>
  );
}
