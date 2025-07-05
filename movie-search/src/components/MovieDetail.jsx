import React from "react";

export default function MovieDetail({ movie, onBack }) {
  return (
    <div className="detail">
      <h2>{movie.Title}</h2>
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Rating:</strong> {movie.imdbRating}</p>
      <img src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"} alt={movie.Title} />
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <button className="back-btn" onClick={onBack}>Back to List</button>
    </div>
  );
}
