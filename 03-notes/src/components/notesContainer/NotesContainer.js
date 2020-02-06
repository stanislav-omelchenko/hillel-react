import React from "react";

import Note from "../note/Note";

import propTypes from "../propTypes";

function NotesContainer(props) {
  return (
    <div className="notes-container">
      {props.notes.map(n => (
        <Note key={n.id} note={n} />
      ))}
    </div>
  );
}

NotesContainer.propTypes = {
  notes: propTypes.notes.isRequired
};

export default NotesContainer;
