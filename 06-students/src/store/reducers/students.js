import { ACTION_REMOVE_GROUP } from "../actions/groups";
import {
  ACTION_SAVE_STUDENT,
  ACTION_REMOVE_STUDENT,
  ACTION_SEARCH_STUDENT
} from "../actions/students";

const initialState = {
  list: [],
  search: ""
};

function updateStudent(list, student) {
  return list.map(item => (item.id === student.id ? student : item));
}

function createStudent(list, student) {
  student.id = Date.now();

  return [...list, { ...student, id: `${Date.now()}` }];
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
        list: payload.id
          ? updateStudent(state.list, payload)
          : createStudent(state.list, payload)
      };
    case ACTION_REMOVE_STUDENT:
      console.log(state, type, payload);
      return {
        ...state,
        list: state.list.filter(student => student.id !== payload)
      };
    case ACTION_SEARCH_STUDENT:
      return { ...state, search: payload };
    default:
      return state;
  }
}
