import React, { useState, useEffect } from "react";
import NotesContainer from "../notesContainer/NotesContainer";

function createEmptyNote() {
  return {
    id: Date.now(),
    title: "Title",
    text: "Text",
    rectangle: {
      x: 200,
      y: 200,
      w: 300,
      h: 150
    }
  };
}

//function clearNoteClick()

export default function NotesBoard(props) {
  const [notes, setNotes] = useState([]);

  const addNoteClick = () => {
    console.log(notes);
    setNotes([...notes, createEmptyNote()]);
  };
  const clearNotesClick = () => {
    console.log(notes);
    setNotes([]);
  };
  useEffect(() => {
    // Reading local storage
    const storedNotes = localStorage.getItem("notes");

    if (storedNotes !== null) {
      setNotes(JSON.parse(storedNotes));
    } else {
      console.log(notes);
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, []);

  useEffect(() => {
    // Setting up callbacks
    document.getElementById("addNote").addEventListener("click", addNoteClick);
    document
      .getElementById("clearNotes")
      .addEventListener("click", clearNotesClick);

    return () => {
      document
        .getElementById("addNote")
        .removeEventListener("click", addNoteClick);
      document
        .getElementById("clearNotes")
        .removeEventListener("click", clearNotesClick);
    };
  }, [notes]);

  useEffect(() => {
    console.log("notes list changed", notes);
    localStorage.setItem("notes", JSON.stringify(notes));

    return () => {};
  }, [notes]);

  return (
    <>
      <header className="notes-board">
        <span>Notes Board</span>
        <button id="addNote">+</button>
        <button id="clearNotes">&#8635;</button>
      </header>
      <NotesContainer notes={notes} />
    </>
  );
}
