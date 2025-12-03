export default function Note({ note, onDelete }) {
  return (
    <div className="noteCard">
      <div className="noteHeader">
        <h3>{note.title || "Untitled"}</h3>
        <button className="deleteButton" onClick={() => onDelete(note.id)}>
          ✕
        </button>
      </div>

      <p className="noteContent">{note.text}</p>
    </div>
  );
}
