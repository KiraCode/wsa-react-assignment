import React, { useState } from "react";
import RecipeImage from "./RecipeImage";

export default function RecipeFinder() {
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);

  const apiKey = "e298b200495e4e2db9b2ab9979e6da3d";

  const fetchRecipes = async () => {
    if (!ingredient.trim()) return;
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&apiKey=${apiKey}`
      );
      const data = await res.json();
      setRecipes(data);
      setIngredient("");
    } catch (err) {
      console.error("API error:", err);
    }
  };

  return (
    <div className="container">
      <div className="recipe-box">
        <h1>Recipe Finder</h1>

        <input
          type="text"
          placeholder="Enter an ingredient"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        />

        <button className="btn" onClick={fetchRecipes}>
          Search Recipes
        </button>
      </div>

      <ul className="recipe-list">
        {recipes.map((item) => (
          <RecipeImage key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
