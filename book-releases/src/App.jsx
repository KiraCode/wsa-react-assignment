import React, { useEffect, useState } from "react";

import AddBook   from "./components/AddBook";
import BookList  from "./components/BookList";

export default function App() {
  // seed data
  const sample = [
    {
      id: 1,
      title: "The Quantum Paradox",
      author: "Elena Martinez",
      releaseDate: "2024-10-15",
      genre: "Sci‑Fi",
      isWishlisted: false,
    },
    {
      id: 2,
      title: "Midnight's Echo",
      author: "James Chen",
      releaseDate: "2024-11-20",
      genre: "Mystery",
      isWishlisted: true,
    },
  ];

  // Load from sessionStorage (wishlist persistence for current session)
  const [books, setBooks] = useState(() => {
    const stored = sessionStorage.getItem("books");
    return stored ? JSON.parse(stored) : sample;
  });

  // Persist to sessionStorage whenever books change
  useEffect(() => {
    sessionStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  /* ---------- helpers ---------- */
  const addBook = (newBook) => {
    // add, then sort ascending by release date
    setBooks((prev) =>
      [...prev, newBook].sort(
        (a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)
      )
    );
  };

  const toggleWishlist = (id) => {
    setBooks((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, isWishlisted: !b.isWishlisted } : b
      )
    );
  };

  return (
    <div className="app">
      <h1 className="app-title">Upcoming Book Releases</h1>

      {/* Add‑Book Form */}
      <AddBook onAdd={addBook} />

      {/* Book List */}
      <BookList books={books} onToggle={toggleWishlist} />
    </div>
  );
}
