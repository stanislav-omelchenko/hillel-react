export const COMMIT_TODO_ACTION = "COMMIT_TODO";
export const REMOVE_TODO_ACTION = "REMOVE_TODO";
export const START_EDITING_ACTION = "START_EDITING";
export const CANCEL_EDITING_ACTION = "CANCEL_EDITING";
export const EDIT_FIELD_ACTION = "EDIT_FIELD";

export function commitTodo(todo) {
  return { type: COMMIT_TODO_ACTION, todo: todo };
}

export function removeTodo(id) {
  return { type: REMOVE_TODO_ACTION, id: id };
}

export function startEditing(todo) {
  return { type: START_EDITING_ACTION, todo: todo };
}

export function cancelEditing() {
  return { type: CANCEL_EDITING_ACTION };
}

export function editField(changes) {
  return { type: EDIT_FIELD_ACTION, changes: changes };
}
