export const COMMIT_TODO_ACTION = "COMMIT_TODO";
export function commitTodo(todo) {
  return { type: COMMIT_TODO_ACTION, todo: todo };
}

export const REMOVE_TODO_ACTION = "REMOVE_TODO";
export function removeTodo(id) {
  return { type: REMOVE_TODO_ACTION, id: id };
}
