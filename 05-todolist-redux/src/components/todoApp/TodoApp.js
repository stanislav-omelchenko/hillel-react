import React from "react";

import TodoEditModal from "../../wrappers/todoEditModalWrapper/TodoEditModalWrapper";
import TodoList from "../todoList/TodoList";

import "./TodoApp.scss";

function TodoApp({ todos, commitTodo, removeTodo, startEditing }) {
  return (
    <>
      <header className="todo-header">
        <div>Todo List</div>
      </header>
      <TodoList
        todos={todos}
        commitTodo={commitTodo}
        removeTodo={removeTodo}
        startEditing={startEditing}
      />
      <TodoEditModal />
    </>
  );
}

export default TodoApp;
