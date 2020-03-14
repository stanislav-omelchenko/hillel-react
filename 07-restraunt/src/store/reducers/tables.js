import {
  ACTION_TABLE_SAVE,
  ACTION_TABLE_REMOVE,
  ACTION_TABLE_SET_SEARCH
} from "../actions/tables";

const initialState = {
  list: [],
  search: ""
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_TABLE_SAVE:
      return state;
    case ACTION_TABLE_REMOVE:
      return state;
    case ACTION_TABLE_SET_SEARCH:
      return state;
    default:
      return state;
  }
}
