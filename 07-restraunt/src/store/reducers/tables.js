import {
  ACTION_TABLE_UPDATE,
  ACTION_TABLE_CREATE,
  ACTION_TABLE_REMOVE,
  ACTION_TABLE_SET_SEARCH,
  ACTION_TABLES_SET,
  ACTION_TABLE_CHANGE_REQUEST_COUNT
} from "../actions/tables";

const initialState = {
  list: [],
  search: "",
  currentRequestsCount: 0
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_TABLE_UPDATE:
      return {
        ...state,
        list: state.list.map(item => (item.id === payload.id ? payload : item))
      };
    case ACTION_TABLE_CREATE:
      return {
        ...state,
        list: [...state.list, payload]
      };
    case ACTION_TABLE_REMOVE:
      return {
        ...state,
        list: state.list.filter(item => item.id !== payload)
      };
    case ACTION_TABLE_SET_SEARCH:
      return { ...state, search: payload };
    case ACTION_TABLES_SET:
      return { ...state, list: payload };
    case ACTION_TABLE_CHANGE_REQUEST_COUNT:
      return {
        ...state,
        currentRequestsCount: state.currentRequestsCount + payload
      };

    default:
      return state;
  }
}
