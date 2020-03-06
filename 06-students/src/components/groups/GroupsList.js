import React from "react";
import { connect } from "react-redux";
import { useRouteMatch, Link } from "react-router-dom";
import { removeGroup, searchGroup } from "../../store/actions/groups";

function GroupsList({ groups, removeGroup, search, searchGroup }) {
  const { url } = useRouteMatch();
  console.log(groups);
  return (
    <>
      <Link to={`${url}/new`}>Add Group</Link>

      <div>
        Search&nbsp;
        <input
          value={search}
          onChange={({ target }) => searchGroup(target.value)}
        />
      </div>
      <ul>
        {groups.map(group => (
          <li key={group.id}>
            <Link to={`${url}/${group.id}`}>{group.name}</Link>
            <button className="remove" onClick={() => removeGroup(group.id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

function mapStateToProps({ groups }) {
  return {
    groups: groups.list.filter(group => group.name.includes(groups.search)),
    search: groups.search
  };
}

const mapDispatchToProps = {
  removeGroup: removeGroup,
  searchGroup: searchGroup
};
export default connect(mapStateToProps, mapDispatchToProps)(GroupsList);
