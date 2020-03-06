import { ACTION_REMOVE_GROUP } from "../actions/groups";
import {
  ACTION_SAVE_STUDENT,
  ACTION_REMOVE_STUDENT,
  ACTION_SEARCH_STUDENT
} from "../actions/students";

const initialState = {
  list: [
    { id: 1, name: "Vasiliy Ivanov", groupId: 1 },
    { id: 2, name: "Vasiliy NeIvanov", groupId: 2 },
    { id: 3, name: "George Washington", groupId: 2 },
    { id: 4, name: "Elon Musk", groupId: 1 }
  ],
  search: ""
};

function updateStudent(list, student) {
  return list.map(item => (item.id === student.id ? student : item));
}

function createStudent(list, student) {
  student.id = Date.now();

  return [...list, student];
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_REMOVE_GROUP:
      return {
        ...state,
        list: state.list.filter(student => student.groupId !== payload)
      };
    case ACTION_SAVE_STUDENT:
      return {
        ...state,
        list: payload
          ? updateStudent(state.list, payload)
          : createStudent(state.list, payload)
      };
    case ACTION_REMOVE_STUDENT:
      return {
        ...state,
        list: state.list.filter(group => group.id !== payload)
      };
    case ACTION_SEARCH_STUDENT:
      return { ...state, search: payload };
    default:
      return state;
  }
}
