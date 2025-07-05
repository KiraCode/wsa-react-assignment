import React from "react";
import BookCard from "./BookCard";

export default function BookList({ books, onToggle }) {
  return (
    <div className="book-list">
      {books.length === 0 ? (
        <p className="empty">No books added yet.</p>
      ) : (
        books.map((b) => (
          <BookCard key={b.id} book={b} onToggle={onToggle} />
        ))
      )}
    </div>
  );
}
