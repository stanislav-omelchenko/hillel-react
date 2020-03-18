import api from "../../services/api";
export const ACTION_WAITER_UPDATE = "WAITER_UPDATE";
export const ACTION_WAITER_CREATE = "WAITER_CREATE";
export const ACTION_WAITER_REMOVE = "WAITER_REMOVE";
export const ACTION_WAITERS_SET = "WAITERS_SET";
export const ACTION_WAITER_SET_SEARCH = "WAITER_SET_SEARCH";

function updateWaiter(waiter) {
  return { type: ACTION_WAITER_UPDATE, payload: waiter };
}

function createWaiter(waiter) {
  return { type: ACTION_WAITER_CREATE, payload: waiter };
}

function removeWaiter(id) {
  return { type: ACTION_WAITER_REMOVE, payload: id };
}

function setWaiters(waiters) {
  return { type: ACTION_WAITERS_SET, payload: waiters };
}

export function setWaiterSearch(searchTerm) {
  return { type: ACTION_WAITER_SET_SEARCH, payload: searchTerm };
}

export const getWaiters = () => async dispatch => {
  const resp = await api.waiters("");

  dispatch(setWaiters(resp.data));
};

export const saveWaiter = waiter => async dispatch => {
  if (waiter.id !== undefined) {
    waiter = (await api.waiters.put(waiter.id, waiter)).data;
    dispatch(updateWaiter(waiter));
  } else {
    waiter = (await api.waiters.post("", waiter)).data;
    dispatch(createWaiter(waiter));
  }
};

export const deleteWaiter = waiterId => async dispatch => {
  const resp = await api.waiters.delete(waiterId);

  dispatch(removeWaiter(resp.data.id));
};
