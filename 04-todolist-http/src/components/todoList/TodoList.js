import React from "react";
import TodoListItem from "../todoListItem/TodoListItem";

function TodoList({ todos, onAddTodoClick, onEdit, onDelete, onSave }) {
  function onButtonClick(e) {
    e.preventDefault();
    onAddTodoClick();
  }

  return (
    <div className="todos-list-cointainer">
      <ul>
        {todos.map(todo => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onEdit={onEdit}
            onDelete={onDelete}
            onSave={onSave}
          />
        ))}
        <li>
          <button onClick={onButtonClick}> Add new todo</button>
        </li>
      </ul>
    </div>
  );
}

export default TodoList;
