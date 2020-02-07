import React, { useState, useEffect } from "react";
import NotesContainer from "../notesContainer/NotesContainer";
import NotesHeader from "../notesHeader/NotesHeader";

import "./NotesBoard.scss";

function createEmptyNote(title, text) {
  return {
    id: Date.now(),
    title: title ?? "Title",
    text: text ?? "Text",
    position: {
      x: 200,
      y: 200
    }
  };
}

//function clearNoteClick()

export default function NotesBoard(props) {
  const [notes, setNotes] = useState([createEmptyNote("Hello", "Grab me :)")]);

  const addNoteClick = () => {
    setNotes([...notes, createEmptyNote()]);
  };

  const clearNotesClick = () => {
    setNotes([]);
  };

  const deleteNoteClick = id => {
    setNotes(notes.filter(n => n.id !== id));
  };

  const noteFieldChange = note => {
    const newNotes = notes.map(n => {
      if (n.id === note.id) {
        return note;
      } else {
        return n;
      }
    });

    setNotes(newNotes);
  };

  const noteMove = (id, pos) => {
    let note = notes.find(n => n.id === id);
    if (note !== undefined) {
      noteFieldChange({
        ...note,
        position: pos
      });
    }
  };
  useEffect(() => {
    // Reading local storage
    const storedNotes = localStorage.getItem("notes");

    if (storedNotes !== null) {
      setNotes(JSON.parse(storedNotes));
    } else {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));

    return () => {};
  }, [notes]);

  return (
    <div className="wrapper">
      <NotesHeader
        onAddNoteClick={addNoteClick}
        onClearNotesClick={clearNotesClick}
      />
      <NotesContainer
        notes={notes}
        onDeleteClick={deleteNoteClick}
        onNoteFieldChange={noteFieldChange}
        onNoteMove={noteMove}
      />
    </div>
  );
}
