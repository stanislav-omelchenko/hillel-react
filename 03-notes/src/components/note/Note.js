import React, { useState, useEffect } from "react";

import propTypes from "../propTypes";

export default function Note({
  note,
  grabbing,
  onNoteFieldChange,
  onDeleteClick
}) {
  const [editing, setEditing] = useState(false);

  const onInputChange = e => {
    onNoteFieldChange({
      ...note,
      [e.target.name]: e.target.value
    });
  };
  useEffect(() => {
    const deleteClickCallback = onDeleteClick.bind(this, note.id);
    document
      .getElementById(`note-delete-${note.id}`)
      .addEventListener("click", deleteClickCallback);

    return () => {
      document
        .getElementById(`note-delete-${note.id}`)
        .removeEventListener("click", deleteClickCallback);
    };
  });

  return (
    <div
      className={`note ${editing ? "editing" : ""}`}
      style={{
        top: note.position.y,
        left: note.position.x
      }}
    >
      {editing ? (
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={onInputChange}
          className="title"
        />
      ) : (
        <strong
          id={`note-${note.id}`}
          className={`title${grabbing ? " grabbing" : ""}`}
        >
          {note.title}
        </strong>
      )}

      <div className="buttons">
        <span>Edit:</span>
        <input
          type="checkbox"
          onChange={e => setEditing(e.target.checked)}
          checked={editing}
        />
        <button id={`note-delete-${note.id}`}>x</button>
      </div>
      <article className="body">
        {editing ? (
          <textarea value={note.text} name="text" onChange={onInputChange} />
        ) : (
          <div>{note.text}</div>
        )}
      </article>
    </div>
  );
}

Note.propTypes = {
  note: propTypes.note.isRequired,
  grabbing: propTypes.bool.isRequired,
  onNoteFieldChange: propTypes.func.isRequired,
  onDeleteClick: propTypes.func.isRequired
};
