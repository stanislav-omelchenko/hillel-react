import {
  COMMIT_TODO_ACTION,
  REMOVE_TODO_ACTION,
  START_EDITING_ACTION,
  CANCEL_EDITING_ACTION,
  EDIT_FIELD_ACTION
} from "./actions";

function newTodo() {
  return {
    title: "",
    isDone: false
  };
}

const initialState = {
  todos: [],
  currentTodo: newTodo(),
  modalVisibility: false
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
          ),
          modalVisibility: false
        };
      } else {
        return {
          ...state,
          todos: [...state.todos, { ...action.todo, id: Date.now() }],
          modalVisibility: false
        };
      }
    case REMOVE_TODO_ACTION:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };

    case START_EDITING_ACTION:
      return {
        ...state,
        currentTodo: action.todo !== undefined ? action.todo : newTodo(),
        modalVisibility: true
      };
    case CANCEL_EDITING_ACTION:
      return {
        ...state,
        modalVisibility: false
      };
    case EDIT_FIELD_ACTION:
      return {
        ...state,
        currentTodo: { ...state.currentTodo, ...action.changes }
      };
    default:
      return state;
  }
}
