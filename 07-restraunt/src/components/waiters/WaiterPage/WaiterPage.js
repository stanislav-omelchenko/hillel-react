import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { saveWaiter } from "../../../store/actions/waiters";

function dateToYMD(date) {
  var d = date.getDate();
  var m = date.getMonth() + 1; //Month from 0 to 11
  var y = date.getFullYear();
  return "" + y + "-" + (m <= 9 ? "0" + m : m) + "-" + (d <= 9 ? "0" + d : d);
}

function WaiterPage({ waiter, saveWaiter }) {
  const [internalWaiter, setInternalWaiter] = useState(waiter);

  const history = useHistory();

  function onSubmit(e) {
    e.preventDefault();
    saveWaiter(internalWaiter);
    history.push("/waiters");
  }

  function fieldChanged(e) {
    e.preventDefault();
    console.log(e.target.name, e.target.value, e.target.type);
    let value = e.target.value;

    switch (e.target.type) {
      case "range":
      case "number":
        value = +value;
        break;
      case "date":
        value = Date.parse(value).valueOf() / 1000;
        break;
    }
    setInternalWaiter({
      ...internalWaiter,
      [e.target.name]: value
    });
  }

  console.log(internalWaiter);
  return (
    <div className="entity-page">
      {waiter !== undefined ? (
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            value={internalWaiter.name}
            onChange={fieldChanged}
          />
          <label htmlFor="salary">Salary (per hour)</label>
          <input
            type="number"
            min="1"
            max="100"
            name="salary"
            id="salary"
            value={internalWaiter.salary}
            onChange={fieldChanged}
          />
          <label htmlFor="startDate">Start date</label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={dateToYMD(new Date(internalWaiter.startDate * 1000))}
            onChange={fieldChanged}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <Redirect to="/waiters" />
      )}
    </div>
  );
}

function mapStateToProps({ waiters }, { match }) {
  console.log(waiters);
  const waiter =
    match.params.id === "create"
      ? {
          name: "",
          salary: 1000,
          startDate: Math.floor(Date.now() / 1000)
        }
      : waiters.list.find(waiter => waiter.id === match.params.id);

  return {
    waiter: waiter
  };
}

const mapDispatchToProps = {
  saveWaiter: saveWaiter
};

export default connect(mapStateToProps, mapDispatchToProps)(WaiterPage);
