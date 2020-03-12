import React, { useState } from "react";
import { connect } from "react-redux";
import { saveGroup } from "../../store/actions/groups";
import { removeStudent } from "../../store/actions/students";
import StudentsListItem from "../students/StudentsListItem";

function GroupForm({ group, students, saveGroup, removeStudent, history }) {
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
          <StudentsListItem
            key={student.id}
            student={student}
            removeStudent={removeStudent}
            group={group}
          />
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps({ groups, students }, { match }) {
  const groupId = match.params.id;
  const group = groups.list.find(group => group.id === groupId);
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
