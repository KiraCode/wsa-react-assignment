import React, { useEffect, useState } from "react";

import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

const API_KEY = "7c3e56e6";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dark, setDark] = useState(false);

  async function fetchMovies() {
    if (!query.trim()) return;
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query.trim()}`
      );
      const data = await res.json();
      if (data.Response === "False") {
        setMovies([]);
      } else {
        setMovies(data.Search);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setIsLoading(false);
      setQuery("");
    }
  }

  useEffect(()=>{
    fetchMovies()
  }, [movies])

  console.log(movies);
  
  return (
    <div className={`app ${dark ? "dark" : ""}`}>
      <button className="mode-btn" onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      <SearchBar query={query} setQuery={setQuery} onSearch={fetchMovies} />

      {isLoading && <p className="loader">Loading…</p>}

      {selected ? (
        <MovieDetail movie={selected} onBack={() => setSelected(null)} />
      ) : (
        <MovieList movies={movies} onSelect={setSelected} />
      )}
    </div>
  );
}
