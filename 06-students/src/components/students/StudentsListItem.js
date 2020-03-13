import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function StudentsListItem({ student, group, removeStudent }) {
  const { url } = useRouteMatch();
  return (
    <li key={student.id}>
      <Link to={`${url}/${student.id}`}>
        <strong>{student.name}</strong> (<span>{group.name}</span>)
      </Link>
      <button className="remove" onClick={() => removeStudent(student.id)}>
        x
      </button>
    </li>
  );
}

export default StudentsListItem;
