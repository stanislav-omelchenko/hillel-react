import React from "react";
import { connect } from "react-redux";
import { useRouteMatch, Link } from "react-router-dom";
import { removeGroup } from "../../store/actions/groups";

function GroupsList({ list, removeGroup }) {
  const { url } = useRouteMatch();
  return (
    <ul>
      {list.map(group => (
        <li key={group.id}>
          <Link to={`${url}/${group.id}`}>{group.name}</Link>
          <button className="remove" onClick={() => removeGroup(group.id)}>
            x
          </button>
        </li>
      ))}
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    list: state.groups.list
  };
}

const mapDispatchToProps = {
  removeGroup: removeGroup
};
export default connect(mapStateToProps, mapDispatchToProps)(GroupsList);
