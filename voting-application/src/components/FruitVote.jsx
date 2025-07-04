import React, { useState } from "react";

export default function FruitVote() {
  const [vote, setVote] = useState({
    apple: 0,
    banana: 0,
    cherry: 0,
  });

  function clickVote(fruit) {
    setVote((prev) => ({ ...prev, [fruit]: prev[fruit] + 1 }));
  }

  return (
    <div className="vote-container">
      <h1>Vote for your Favorite Fruit!</h1>
      <div className="fruits">
        {["apple", "banana", "cherry"].map((fruit) => (
          <div key={fruit} className="fruit-box">
            <p className="fruit">
              {fruit === "apple" ? "🍎" : fruit === "banana" ? "🍌" : "🍒"}
            </p>
            <p className="title">
              {fruit.charAt(0).toUpperCase() + fruit.slice(1)}
            </p>
            <button className="btn" onClick={() => clickVote(fruit)}>
              Vote
            </button>
            <p>Votes: {vote[fruit]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
