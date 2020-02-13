import React from "react";
import TodoListItem from "../todoListItem/TodoListItem";

import propTypes from "../propTypes";

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

TodoList.propTypes = {
  todos: propTypes.todoList.isRequired,
  onAddTodoClick: propTypes.func.isRequired,
  onEdit: propTypes.func.isRequired,
  onDelete: propTypes.func.isRequired,
  onSave: propTypes.func.isRequired
};

export default TodoList;
