import {
  ACTION_WAITER_UPDATE,
  ACTION_WAITER_CREATE,
  ACTION_WAITER_REMOVE,
  ACTION_WAITER_SET_SEARCH,
  ACTION_WAITERS_SET
} from "../actions/waiters";

const initialState = {
  list: [],
  search: ""
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
      return state;
    case ACTION_WAITERS_SET:
      return { ...state, list: payload };
    default:
      return state;
  }
}
