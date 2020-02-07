import React, { useState } from "react";

import Note from "../note/Note";

import propTypes from "../propTypes";

function NotesContainer({
  notes,
  onNoteFieldChange,
  onDeleteClick,
  onNoteMove
}) {
  const [moving, setMoving] = useState(false);
  const [movingId, setMovingId] = useState(0);
  const [containerPos, setContainerPos] = useState({ x: 0, y: 0 });
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const onMouseDown = e => {
    console.log(e.target);
    if (
      e.target.className === "title" &&
      e.target.tagName.toLowerCase() === "strong"
    ) {
      e.preventDefault();

      const rect = e.target.parentElement.parentElement.getBoundingClientRect();

      setMovingId(+e.target.id.slice(e.target.id.indexOf("-") + 1));
      setContainerPos({
        x: rect.x,
        y: rect.y
      });
      setMouseOffset({
        x: e.clientX - e.target.parentElement.offsetLeft - rect.x,
        y: e.clientY - e.target.parentElement.offsetTop - rect.y
      });
      setMoving(true);

      console.log("moving");
    }
  };
  const onMouseUp = e => {
    if (moving) {
      setMoving(false);
      setMovingId(0);

      console.log("not moving");
    }
  };
  const onMouseMove = e => {
    if (moving) {
      onNoteMove(movingId, {
        x: e.clientX - containerPos.x - mouseOffset.x,
        y: e.clientY - containerPos.y - mouseOffset.y
      });
    }
  };
  return (
    <div
      className="notes-container"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {notes.map(n => (
        <Note
          key={n.id}
          grabbing={movingId === n.id}
          note={n}
          onDeleteClick={onDeleteClick}
          onNoteFieldChange={onNoteFieldChange}
        />
      ))}
    </div>
  );
}

NotesContainer.propTypes = {
  notes: propTypes.notes.isRequired,
  onNoteFieldChange: propTypes.func.isRequired,
  onDeleteClick: propTypes.func.isRequired,
  onNoteMove: propTypes.func.isRequired
};

export default NotesContainer;
