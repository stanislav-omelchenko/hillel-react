import React, { useState } from "react";
import { connect } from "react-redux";
import { saveGroup } from "../../store/actions/groups";

function GroupForm({ group, students, saveGroup }) {
  const [name, setName] = useState(group.name);
  function onSaveClick(e) {
    e.preventDefault();
    saveGroup({ id: group.id, name });
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
      {students.map(student => (
        <div key={student.id}>{student.name}</div>
      ))}
    </div>
  );
}

function mapStateToProps({ groups, students }, { match }) {
  console.log(groups, match);
  const groupId = parseInt(match.params.id);
  return {
    group: groups.list.find(group => group.id === groupId),
    students: students.list.filter(student => student.groupId === groupId)
  };
}

const mapDispatchToProps = {
  saveGroup: saveGroup
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);
