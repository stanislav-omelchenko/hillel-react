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
          <label htmlFor="title">Todo Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={todo.title}
            onChange={onInputChange}
          />
          <button type="submit">{todo.id ? "Save todo" : "Create todo"}</button>
        </form>
        <button type="button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
}

export default TodoEditModal;
