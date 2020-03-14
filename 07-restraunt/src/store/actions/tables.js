export const ACTION_TABLE_SAVE = "TABLE_SAVE";
export const ACTION_TABLE_REMOVE = "TABLE_REMOVE";
export const ACTION_TABLE_SET_SEARCH = "TABLE_SET_SEARCH";

export function saveTable(table) {
  return { type: ACTION_TABLE_SAVE, payload: table };
}
export function removeTable(id) {
  return { type: ACTION_TABLE_REMOVE, payload: id };
}
export function setTableSearch(searchTerm) {
  return { type: ACTION_TABLE_SET_SEARCH, payload: searchTerm };
}
