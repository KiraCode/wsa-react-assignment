import React, { useEffect, useState } from "react";

export default function BookCard({ book, onToggle }) {
  const [countdown, setCountdown] = useState(getCountdown(book.releaseDate));

  // update every hour
  useEffect(() => {
    const id = setInterval(() => {
      setCountdown(getCountdown(book.releaseDate));
    }, 60 * 60 * 1000); // hourly

    return () => clearInterval(id);
  }, [book.releaseDate]);

  const { days, hours, released } = countdown;

  return (
    <div className="card">
      <h3 className="card-title">{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Release Date: {book.releaseDate}</p>

      <p className="timer">
        {released ? "Released!" : `${days}d ${hours}h left`}
      </p>

      <div className="card-actions">
        <button
          className="wish-btn"
          onClick={() => onToggle(book.id)}
        >
          {book.isWishlisted ? "💗 Wishlisted" : "🤍 Add to Wishlist"}
        </button>

        {released && <span className="badge">📚 Available</span>}
      </div>
    </div>
  );
}

/* helper */
function getCountdown(dateStr) {
  const now  = new Date();
  const rel  = new Date(dateStr + "T00:00:00");

  const diff = rel - now;
  if (diff <= 0) return { released: true };

  const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  return { days, hours, released: false };
}
