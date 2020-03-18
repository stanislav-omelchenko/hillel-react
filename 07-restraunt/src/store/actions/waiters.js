import api from "../../services/api";
export const ACTION_WAITER_UPDATE = "WAITER_UPDATE";
export const ACTION_WAITER_CREATE = "WAITER_CREATE";
export const ACTION_WAITER_REMOVE = "WAITER_REMOVE";
export const ACTION_WAITERS_SET = "WAITERS_SET";
export const ACTION_WAITER_CHANGE_REQUEST_COUNT = "WAITER_CHANGE_REQUEST_COUNT";
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

function requestInc() {
  return { type: ACTION_WAITER_CHANGE_REQUEST_COUNT, payload: +1 };
}
function requestDec() {
  return { type: ACTION_WAITER_CHANGE_REQUEST_COUNT, payload: -1 };
}

export function setWaiterSearch(searchTerm) {
  return { type: ACTION_WAITER_SET_SEARCH, payload: searchTerm };
}

export const getWaiters = () => async dispatch => {
  dispatch(requestInc());
  const resp = await api.waiters("");

  dispatch(setWaiters(resp.data));
  dispatch(requestDec());
};

export const saveWaiter = waiter => async dispatch => {
  dispatch(requestInc());
  if (waiter.id !== undefined) {
    waiter = (await api.waiters.put(waiter.id, waiter)).data;
    dispatch(updateWaiter(waiter));
  } else {
    waiter = (await api.waiters.post("", waiter)).data;
    dispatch(createWaiter(waiter));
  }
  dispatch(requestDec());
};

export const deleteWaiter = waiterId => async dispatch => {
  dispatch(requestInc());
  const resp = await api.waiters.delete(waiterId);

  dispatch(removeWaiter(resp.data.id));
  dispatch(requestDec());
};
