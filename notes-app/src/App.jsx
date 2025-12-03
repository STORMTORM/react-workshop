import { useState } from "react";
import NoteForm from "./NoteForm.jsx";
import "./index.css";
import Note from "./Note.jsx";

export default function App() {
  const [notes, setNotes] = useState([]);
  console.log(notes);

  function addNote(note) {
    setNotes([...notes, note]);
  }

  function deleteNote(id) {
    setNotes(notes.filter(n => n.id !== id));
  }

  return (
    <div className="app">
      <h1>Notes</h1>

      <NoteForm onAdd={addNote} />
      
      <div className="notesList">
        {notes.map(note => (
          <Note
            key={note.id}
            note={note}
            onDelete={deleteNote}
          />
        ))}
      </div>
    </div>
  );
}
