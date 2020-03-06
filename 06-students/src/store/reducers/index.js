import { combineReducers } from "redux";
import groups from "./groups";
import students from "./students";

export default combineReducers({
  groups: groups,
  students: students
});
