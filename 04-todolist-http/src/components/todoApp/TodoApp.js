import React, { useState, useEffect } from "react";

import TodoEditModal from "../todoEditModal/TodoEditModal";
import TodoList from "../todoList/TodoList";
import api from "../../services/api";

import "./TodoApp.scss";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(createNewTodo());
  const [modalVisibility, setModalVisibility] = useState(false);

  useEffect(() => {
    api.get("").then(response => {
      setTodos(response.data);
    });
  }, []);

  function createNewTodo() {
    return {
      title: "",
      isDone: false
    };
  }

  function onAddTodoClick() {
    setCurrentTodo(createNewTodo());
    setModalVisibility(true);
  }

  function onTodoEdit(todo) {
    setCurrentTodo(todo);
    setModalVisibility(true);
  }

  function onTodoDelete(todoId) {
    api
      .delete(todoId)
      .then(resp => setTodos(todos.filter(todo => todo.id !== resp.data.id)));
  }
  function onCurrentTodoChange(changes) {
    setCurrentTodo({
      ...currentTodo,
      ...changes
    });
  }

  function createTodoItem(todo) {
    api.post("", todo).then(resp => setTodos([...todos, resp.data]));
  }

  function updateTodoItem(todo) {
    api.put(todo.id, todo).then(resp => {
      setTodos(
        todos.map(todo => (todo.id === resp.data.id ? resp.data : todo))
      );
    });
  }

  function onSave(todo) {
    if (todo.id) {
      updateTodoItem(todo);
    } else {
      createTodoItem(todo);
    }
    setModalVisibility(false);
  }
  function onClose() {
    setModalVisibility(false);
  }

  return (
    <>
      <header className="todo-header">
        <div>Todo List</div>
      </header>
      <TodoList
        todos={todos}
        onAddTodoClick={onAddTodoClick}
        onEdit={onTodoEdit}
        onDelete={onTodoDelete}
        onSave={onSave}
      />
      <TodoEditModal
        visible={modalVisibility}
        todo={currentTodo}
        onChange={onCurrentTodoChange}
        onSave={onSave}
        onClose={onClose}
      />
    </>
  );
}

export default TodoApp;
