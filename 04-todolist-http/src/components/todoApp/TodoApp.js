import React, { useState } from "react";
import TodoEditModal from "../todoEditModal/TodoEditModal";
import TodoList from "../todoList/TodoList";
import api from "../../services/api";
import TodoLoader from "../todoLoader/TodoLoader";

function TodoApp() {
  return (
    <>
      <TodoLoader />
      <TodoList />
      <TodoEditModal />
    </>
  );
}

export default TodoApp;
