import {
  ACTION_WAITER_SAVE,
  ACTION_WAITER_REMOVE,
  ACTION_WAITER_SET_SEARCH
} from "../actions/waiters";

const initialState = {
  list: [
    {
      id: 1,
      name: "Ali Baba",
      salary: 10101,
      startDate: Date.now() / 1000 - 60 * 60 * 24 * 30
    },
    {
      id: 2,
      name: "Thug 1",
      salary: 1010,
      startDate: Date.now() / 1000 - 60 * 60 * 24 * 30
    }
  ],
  search: ""
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_WAITER_SAVE:
      return state;
    case ACTION_WAITER_REMOVE:
      return state;
    case ACTION_WAITER_SET_SEARCH:
      return state;
    default:
      return state;
  }
}
