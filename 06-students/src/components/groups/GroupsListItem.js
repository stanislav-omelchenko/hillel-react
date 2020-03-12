import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
function GroupsListItem({ group, removeGroup }) {
  const { url } = useRouteMatch();

  return (
    <li key={group.id}>
      <Link to={`${url}/${group.id}`}>
        <strong>{group.name}</strong>
      </Link>
      <button className="remove" onClick={() => removeGroup(group.id)}>
        x
      </button>
    </li>
  );
}

export default GroupsListItem;
