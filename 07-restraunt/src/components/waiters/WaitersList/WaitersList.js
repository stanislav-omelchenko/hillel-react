import React from "react";
import { connect } from "react-redux";
import WaitersListItem from "../WaitersLIstItem/WaitersListItem";

function WaitersList({ waiters }) {
  return (
    <>
      <table className="waiters-table">
        <thead>
          <tr>
            <td className="shrink">ID</td>
            <td className="expand">Name</td>
            <td className="shrink">Salary</td>
            <td className="shrink">Start Date</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {waiters.map(waiter => (
            <WaitersListItem key={waiter.id} waiter={waiter} />
          ))}
        </tbody>
      </table>
    </>
  );
}

function mapStateToProps({ waiters }) {
  const rex = new RegExp(waiters.search, "gi");
  return {
    waiters: waiters.list.filter(waiter => waiter.name.match(rex)),
    search: waiters.search
  };
}

const mapDispatchToProps = {
  //   removeStudent: removeStudent,
  //   searchStudent: searchStudent
};

export default connect(mapStateToProps, mapDispatchToProps)(WaitersList);
