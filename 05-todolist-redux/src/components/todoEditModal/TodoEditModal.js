import React from "react";

import propTypes from "../propTypes";

function TodoEditModal({
  modalVisibility,
  currentTodo,
  commitTodo,
  cancelEditing,
  editField
}) {
  function onSubmit(e) {
    e.preventDefault();
    commitTodo(currentTodo);
  }

  return (
    <div className={`todos-modal-container${modalVisibility ? "" : " hidden"}`}>
      <div className="todos-edit-modal">
        <form onSubmit={onSubmit}>
          <div className="header">Adding new item in TODO list</div>
          <label htmlFor="title">Todo Title:</label>
          <br />
          <input
            type="text"
            name="title"
            id="title"
            value={currentTodo.title}
            onChange={e => editField({ [e.target.name]: e.target.value })}
          />
          <div className="buttons-row">
            <button type="submit" className="save">
              {currentTodo.id ? "Save todo" : "Create todo"}
            </button>
            <button type="button" onClick={cancelEditing} className="cancel">
              Cancel
            </button>
          </div>
        </form>
        <button type="button" onClick={cancelEditing} className="close">
          X
        </button>
      </div>
    </div>
  );
}

TodoEditModal.propTypes = {
  modalVisibility: propTypes.bool.isRequired,
  currentTodo: propTypes.todoItem.isRequired,
  commitTodo: propTypes.func.isRequired,
  cancelEditing: propTypes.func.isRequired,
  editField: propTypes.func.isRequired
};

export default TodoEditModal;

// export default TodoEditModal;
