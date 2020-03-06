import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { saveGroup } from "../../store/actions/groups";
import { removeStudent } from "../../store/actions/students";

function GroupForm({ group, students, saveGroup, removeStudent, history }) {
  console.log(group);
  const [name, setName] = useState(group.name);
  function onSaveClick(e) {
    e.preventDefault();
    saveGroup({ id: group.id, name });
    history.goBack();
  }

  return (
    <div>
      <form onSubmit={onSaveClick}>
        <label htmlFor="groupName">Group Name: </label>
        <input
          type="text"
          id="groupName"
          name="groupName"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <button type="submit">Save</button>
      </form>
      <div>Students in group:</div>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            <Link to={`/students/${student.id}`}>{student.name}</Link>&nbsp;
            <button
              className="remove"
              onClick={() => removeStudent(student.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps({ groups, students }, { match }) {
  const groupId = match.params.id;
  const group = groups.list.find(group => group.id === match.groupId);
  return {
    group: group !== undefined ? group : { id: "", name: "" },
    students: students.list.filter(student => student.groupId === groupId)
  };
}

const mapDispatchToProps = {
  saveGroup: saveGroup,
  removeStudent: removeStudent
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);
