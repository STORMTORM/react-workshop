import { useState } from "react";

export default function NoteForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title && !text) return;

    onAdd({
        id: Date.now(),
        title,
        text
    });

    setTitle("");
    setText("");
  }
  return (
    <form onSubmit={handleSubmit} className="noteForm">
      <input
        className="noteTitle"
        placeholder="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <textarea
        className="noteText"
        placeholder="note..."
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <button className="addButton">Save</button>
    </form>
  );
}

