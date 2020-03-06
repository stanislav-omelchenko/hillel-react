export const ACTION_SAVE_STUDENT = "ACTION_SAVE_STUDENT";
export const ACTION_REMOVE_STUDENT = "ACTION_REMOVE_STUDENT";
export const ACTION_SEARCH_STUDENT = "ACTION_SEARCH_STUDENT";

export function saveStudent(group) {
  return { type: ACTION_SAVE_STUDENT, payload: group };
}
export function removeStudent(id) {
  return { type: ACTION_REMOVE_STUDENT, payload: id };
}
export function searchStudent(searchTerm) {
  return { type: ACTION_SEARCH_STUDENT, payload: searchTerm };
}
