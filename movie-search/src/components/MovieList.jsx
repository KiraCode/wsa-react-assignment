import React from "react";
import MovieItem from "./MovieItem";

export default function MovieList({ movies, onSelect }) {
  return (
    <div className="movie-list">
      {movies.length === 0 ? (
        <p className="no-movies">No movies found.</p>
      ) : (
        movies.map((m) => (
          <MovieItem key={m.imdbID} movie={m} onSelect={onSelect} />
        ))
      )}
    </div>
  );
}
