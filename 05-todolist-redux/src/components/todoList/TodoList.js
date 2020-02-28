import React from "react";
import TodoListItem from "../todoListItem/TodoListItem";

import propTypes from "../propTypes";

function TodoList({ todos, commitTodo, removeTodo, startEditing }) {
  return (
    <div className="todos-list-cointainer">
      <ul>
        {todos.map(todo => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            commitTodo={commitTodo}
            removeTodo={removeTodo}
            startEditing={startEditing}
          />
        ))}
        <li>
          <button onClick={() => startEditing()}> Add new todo</button>
        </li>
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todos: propTypes.todoList.isRequired,
  commitTodo: propTypes.func.isRequired,
  removeTodo: propTypes.func.isRequired,
  startEditing: propTypes.func.isRequired
};

export default TodoList;
