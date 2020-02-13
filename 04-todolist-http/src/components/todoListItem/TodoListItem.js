import React from "react";

function TodoListItem({ todo, onEdit, onDelete, onSave }) {
  function onDeleteClick(e) {
    e.stopPropagation();
    onDelete(todo.id);
  }

  function onItemClick() {
    onSave({
      ...todo,
      isDone: !todo.isDone
    });
  }

  function onEditClick(e) {
    e.stopPropagation();
    onEdit(todo);
  }

  return (
    <li onClick={onItemClick}>
      {todo.title} {todo.isDone ? "Done" : "Not done"}
      <button type="button" onClick={onEditClick}>
        Edit
      </button>
      <button type="button" onClick={onDeleteClick}>
        Delete
      </button>
    </li>
  );
}

export default TodoListItem;
