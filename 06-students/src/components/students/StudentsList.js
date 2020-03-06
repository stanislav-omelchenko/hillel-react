import React from "react";
import { connect } from "react-redux";
import { useRouteMatch, Link } from "react-router-dom";
import { removeStudent, searchStudent } from "../../store/actions/students";

function StudentsList({ students, removeStudent, searchStudent, search }) {
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
          <li key={student.id}>
            <Link to={`${url}/${student.id}`}>{student.name}</Link>
            <button
              className="remove"
              onClick={() => removeStudent(student.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

function mapStateToProps({ students }) {
  return {
    students: students.list.filter(student =>
      student.name.includes(students.search)
    ),
    search: students.search
  };
}

const mapDispatchToProps = {
  removeStudent: removeStudent,
  searchStudent: searchStudent
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);
