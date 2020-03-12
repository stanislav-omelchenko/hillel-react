import React, { useState } from "react";
import { connect } from "react-redux";
import { saveStudent } from "../../store/actions/students";
import { removeStudent } from "../../store/actions/students";

function StudentForm({ student, groups, saveStudent, removeStudent, history }) {
  const [name, setName] = useState(student.name);
  const [groupId, setGroupId] = useState(student.groupId);

  function onSaveClick(e) {
    e.preventDefault();
    saveStudent({ id: student.id, groupId: groupId, name });
    history.goBack();
  }

  return (
    <div>
      <form onSubmit={onSaveClick}>
        <div>
          <label htmlFor="studentName">Student Name: </label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          <label htmlFor="studentGroup">Group:</label>
          <select
            value={groupId}
            onChange={({ target }) => setGroupId(target.value)}
          >
            {groups.map(group => (
              <option key={group.id} value={group.id}>
                {group.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

function mapStateToProps({ groups, students }, { match }) {
  const student = students.list.find(student => student.id === match.params.id);
  return {
    student:
      student !== undefined
        ? student
        : { id: "", name: "", groupId: groups.list[0].id },
    groups: groups.list
  };
}

const mapDispatchToProps = {
  saveStudent: saveStudent,
  removeStudent: removeStudent
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
