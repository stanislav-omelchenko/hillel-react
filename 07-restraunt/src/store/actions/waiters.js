export const ACTION_WAITER_SAVE = "WAITER_SAVE";
export const ACTION_WAITER_REMOVE = "WAITER_REMOVE";
export const ACTION_WAITER_SET_SEARCH = "WAITER_SET_SEARCH";

export function saveWaiter(waiter) {
  return { type: ACTION_WAITER_SAVE, payload: waiter };
}
export function removeWaiter(id) {
  return { type: ACTION_WAITER_REMOVE, payload: id };
}
export function setWaiterSearch(searchTerm) {
  return { type: ACTION_WAITER_SET_SEARCH, payload: searchTerm };
}
