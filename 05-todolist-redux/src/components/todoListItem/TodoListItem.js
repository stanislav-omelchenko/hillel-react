import React from "react";

import propTypes from "../propTypes";

function TodoListItem({ todo, commit, remove }) {
  function onDeleteClick(e) {
    e.stopPropagation();
    remove(todo.id);
  }

  function onItemClick() {
    commit({
      ...todo,
      isDone: !todo.isDone
    });
  }

  function onEditClick(e) {
    e.stopPropagation();
    // onEdit(todo);
  }

  return (
    <li onClick={onItemClick} className={todo.isDone ? "done" : ""}>
      <span className="tick">{todo.isDone ? "✔" : "✖"}</span>
      <span className="title">{todo.title}</span>
      <button type="button" onClick={onEditClick} className="edit-button">
        Edit
      </button>
      <button type="button" onClick={onDeleteClick} className="delete-button">
        Delete
      </button>
    </li>
  );
}

TodoListItem.propTypes = {
  todo: propTypes.todoItem.isRequired,
  onEdit: propTypes.func.isRequired,
  onDelete: propTypes.func.isRequired,
  onSave: propTypes.func.isRequired
};

export default TodoListItem;
