import React, { useState } from "react";

import propTypes from "../propTypes";

export default function Note(props) {
  const [editing, setEditing] = useState(true);

  return (
    <div className={`note ${editing ? "editing" : ""}`}>
      {" "}
      <header>
        <input type="text" value={props.note.title} />

        <strong>{props.note.title}</strong>
        <input
          type="checkbox"
          onChange={e => setEditing(e.target.checked)}
          checked={editing}
        />
        <button>x</button>
      </header>
      <article>
        <div>{props.note.text}</div>
        <textarea value={props.note.text} />
      </article>
    </div>
  );
}

Note.propTypes = {
  note: propTypes.note.isRequired
};
