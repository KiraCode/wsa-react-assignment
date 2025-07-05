import React, { useState } from "react";

export default function AddBook({ onAdd }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    releaseDate: "",
    genre: "",
  });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (!form.title || !form.author || !form.releaseDate || !form.genre) {
      alert("Please fill in all fields.");
      return;
    }

    onAdd({
      ...form,
      id: Date.now(),
      isWishlisted: false,
    });

    setForm({ title: "", author: "", releaseDate: "", genre: "" });
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Book Title"
        value={form.title}
        onChange={handleChange}
      />

      <input
        type="text"
        name="author"
        placeholder="Author Name"
        value={form.author}
        onChange={handleChange}
      />

      <input
        type="date"
        name="releaseDate"
        value={form.releaseDate}
        onChange={handleChange}
      />

      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={form.genre}
        onChange={handleChange}
      />

      <button type="submit" className="add-btn">
        Add Book
      </button>
    </form>
  );
}
