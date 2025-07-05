import React, { useState } from "react";

const API_KEY = "7c3e56e6";

export default function MovieItem({ movie, onSelect }) {
  const { Title, Year, Poster, imdbID } = movie;
  const [loading, setLoading] = useState(false);

  async function fetchDetails() {
    try {
      setLoading(true);
      const res  = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`);
      const data = await res.json();
      onSelect(data);
    } catch (err) {
      console.error("Detail fetch error:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="movie-card" onClick={fetchDetails}>
      <h2 className="movie-title">{Title}</h2>
      <span className="movie-year">{Year}</span>
      {loading
        ? <p style={{ marginTop: 20 }}>Loading…</p>
        : <img src={Poster !== "N/A" ? Poster : "/no-image.png"} alt={Title} />}
    </div>
  );
}
