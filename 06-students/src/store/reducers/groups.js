import {
  ACTION_SAVE_GROUP,
  ACTION_REMOVE_GROUP,
  ACTION_SEARCH_GROUP
} from "../actions/groups";

const initialState = {
  list: [],
  search: ""
};

function updateGroup(list, group) {
  return list.map(item => (item.id === group.id ? group : item));
}

function createGroup(list, group) {
  group.id = `${Date.now()}`;

  return [...list, group];
}
export default function(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_SAVE_GROUP:
      return {
        ...state,
        list: payload.id
          ? updateGroup(state.list, payload)
          : createGroup(state.list, payload)
      };
    case ACTION_REMOVE_GROUP:
      return {
        ...state,
        list: state.list.filter(group => group.id !== payload)
      };
    case ACTION_SEARCH_GROUP:
      return { ...state, search: payload };
    default:
      return state;
  }
}
