import {
  ACTION_WAITER_UPDATE,
  ACTION_WAITER_CREATE,
  ACTION_WAITER_REMOVE,
  ACTION_WAITER_SET_SEARCH,
  ACTION_WAITERS_SET,
  ACTION_WAITER_CHANGE_REQUEST_COUNT
} from "../actions/waiters";

const initialState = {
  list: [],
  search: "",
  currentRequestsCount: 0
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_WAITER_UPDATE:
      return {
        ...state,
        list: state.list.map(item => (item.id === payload.id ? payload : item))
      };
    case ACTION_WAITER_CREATE:
      return {
        ...state,
        list: [...state.list, payload]
      };
    case ACTION_WAITER_REMOVE:
      return {
        ...state,
        list: state.list.filter(item => item.id !== payload)
      };
    case ACTION_WAITER_SET_SEARCH:
      return { ...state, search: payload };
    case ACTION_WAITERS_SET:
      return { ...state, list: payload };
    case ACTION_WAITER_CHANGE_REQUEST_COUNT:
      return {
        ...state,
        currentRequestsCount: state.currentRequestsCount + payload
      };
    default:
      return state;
  }
}
