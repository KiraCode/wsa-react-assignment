import React from "react";

export default function SearchBar({ query, setQuery, onSearch }) {
  return (
    <div className="search">
      <h1>Movie Search App</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a movie…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch()}
        />
        <button className="search-btn" onClick={onSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
