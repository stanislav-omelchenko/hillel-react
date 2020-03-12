import React from "react";
import { connect } from "react-redux";
import { useRouteMatch, Link } from "react-router-dom";
import { removeStudent, searchStudent } from "../../store/actions/students";
import StudentsListItem from "./StudentsListItem";

function StudentsList({
  groups,
  students,
  removeStudent,
  searchStudent,
  search
}) {
  const { url } = useRouteMatch();
  return (
    <>
      <Link to={`${url}/new`}>Add Student</Link>
      <div>
        Search&nbsp;
        <input
          value={search}
          onChange={({ target }) => searchStudent(target.value)}
        />
      </div>
      <ul>
        {students.map(student => (
          <StudentsListItem
            key={student.id}
            student={student}
            group={groups.find(group => group.id === student.groupId)}
            removeStudent={removeStudent}
          />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps({ students, groups }) {
  const rex = new RegExp(students.search, "gi");
  return {
    groups: groups.list,
    students: students.list.filter(student => student.name.match(rex)),
    search: students.search
  };
}

const mapDispatchToProps = {
  removeStudent: removeStudent,
  searchStudent: searchStudent
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);
