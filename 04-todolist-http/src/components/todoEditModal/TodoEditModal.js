import React from "react";

function TodoEditModal({ visible, todo, onChange, onSave, onClose }) {
  function onInputChange(e) {
    onChange({
      [e.target.name]: e.target.value
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    onSave(todo);
  }

  return (
    <div className={`todos-modal-container${visible ? "" : " hidden"}`}>
      <div className="todos-edit-modal">
        <form onSubmit={onSubmit}>
          <div className="header">Adding new item in TODO list</div>
          <label htmlFor="title">Todo Title:</label>
          <br />
          <input
            type="text"
            name="title"
            id="title"
            value={todo.title}
            onChange={onInputChange}
          />
          <div className="buttons-row">
            <button type="submit" className="save">
              {todo.id ? "Save todo" : "Create todo"}
            </button>
            <button type="button" onClick={onClose} className="cancel">
              Cancel
            </button>
          </div>
        </form>
        <button type="button" onClick={onClose} className="close">
          X
        </button>
      </div>
    </div>
  );
}

export default TodoEditModal;
