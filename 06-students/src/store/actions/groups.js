export const ACTION_SAVE_GROUP = "ACTION_SAVE_GROUP";
export const ACTION_REMOVE_GROUP = "ACTION_REMOVE_GROUP";
export const ACTION_SEARCH_GROUP = "ACTION_SEARCH_GROUP";

export function saveGroup(group) {
  return { type: ACTION_SAVE_GROUP, payload: group };
}
export function removeGroup(id) {
  return { type: ACTION_REMOVE_GROUP, payload: id };
}
export function searchGroup(searchTerm) {
  return { type: ACTION_SEARCH_GROUP, payload: searchTerm };
}
