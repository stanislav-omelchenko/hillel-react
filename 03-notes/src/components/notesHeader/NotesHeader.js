import React, { useEffect } from "react";
import propTypes from "../propTypes";

export default function NotesHeader({ onAddNoteClick, onClearNotesClick }) {
  useEffect(() => {
    document
      .getElementById("addNote")
      .addEventListener("click", onAddNoteClick);
    document
      .getElementById("clearNotes")
      .addEventListener("click", onClearNotesClick);

    return () => {
      document
        .getElementById("addNote")
        .removeEventListener("click", onAddNoteClick);
      document
        .getElementById("clearNotes")
        .removeEventListener("click", onClearNotesClick);
    };
  });

  return (
    <header className="notes-header">
      <div>
        <span>Notes Board</span>
        <button id="addNote">+</button>
        <button id="clearNotes">&#8635;</button>
      </div>
    </header>
  );
}

NotesHeader.propTypes = {
  onAddNoteClick: propTypes.func.isRequired,
  onClearNotesClick: propTypes.func.isRequired
};
