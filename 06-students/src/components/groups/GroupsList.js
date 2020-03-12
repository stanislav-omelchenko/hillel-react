import React from "react";
import { connect } from "react-redux";
import { useRouteMatch, Link } from "react-router-dom";
import { removeGroup, searchGroup } from "../../store/actions/groups";
import GroupsListItem from "./GroupsListItem";

function GroupsList({ groups, removeGroup, search, searchGroup }) {
  const { url } = useRouteMatch();
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
          <GroupsListItem
            key={group.id}
            group={group}
            removeGroup={removeGroup}
          />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps({ groups }) {
  const rex = new RegExp(groups.search, "gi");
  return {
    groups: groups.list.filter(group => group.name.match(rex)),
    search: groups.search
  };
}

const mapDispatchToProps = {
  removeGroup: removeGroup,
  searchGroup: searchGroup
};
export default connect(mapStateToProps, mapDispatchToProps)(GroupsList);
