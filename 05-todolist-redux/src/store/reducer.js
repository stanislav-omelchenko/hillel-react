import { COMMIT_TODO_ACTION, REMOVE_TODO_ACTION } from "./actions";

function newTodo() {
  return {
    title: "",
    isDone: false
  };
}

const initialState = {
  todos: [{ id: 1, title: "test", isDone: false }],
  currentTodo: newTodo()
};

export default function(state = initialState, action) {
  console.log("reducer", action);
  switch (action.type) {
    case COMMIT_TODO_ACTION:
      if (action.todo.id !== undefined) {
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.todo.id ? action.todo : todo
          )
        };
      } else {
        return {
          ...state,
          todos: [...state.todos, { ...action.todo, id: Date.now() }]
        };
      }
    case REMOVE_TODO_ACTION:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    default:
      return state;
  }
}
