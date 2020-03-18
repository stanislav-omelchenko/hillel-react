import React from "react";
import { connect } from "react-redux";
import WaitersListItem from "../WaitersLIstItem/WaitersListItem";
import { Link, useRouteMatch } from "react-router-dom";
import { deleteWaiter } from "../../../store/actions/waiters";

function WaitersList({ waiters, deleteWaiter }) {
  const { url } = useRouteMatch();

  return (
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
          <WaitersListItem
            key={waiter.id}
            waiter={waiter}
            deleteWaiter={deleteWaiter}
          />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="5">
            <Link to={`${url}/create`}>
              <button>Add new waiter</button>
            </Link>
          </td>
        </tr>
      </tfoot>
    </table>
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
  deleteWaiter: deleteWaiter
  //   searchStudent: searchStudent
};

export default connect(mapStateToProps, mapDispatchToProps)(WaitersList);
