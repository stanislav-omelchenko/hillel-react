import React from "react";

import propTypes from "../propTypes";

function TodoListItem({ todo, commitTodo, removeTodo, startEditing }) {
  function onDeleteClick(e) {
    e.stopPropagation();
    removeTodo(todo.id);
  }

  function onItemClick() {
    commitTodo({
      ...todo,
      isDone: !todo.isDone
    });
  }

  function onEditClick(e) {
    e.stopPropagation();
    startEditing(todo);
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
  commitTodo: propTypes.func.isRequired,
  removeTodo: propTypes.func.isRequired,
  startEditing: propTypes.func.isRequired
};

export default TodoListItem;
