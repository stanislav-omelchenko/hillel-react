import React, { useState } from "react";
import { connect } from "react-redux";

function dateToYMD(date) {
  var d = date.getDate();
  var m = date.getMonth() + 1; //Month from 0 to 11
  var y = date.getFullYear();
  return "" + y + "-" + (m <= 9 ? "0" + m : m) + "-" + (d <= 9 ? "0" + d : d);
}

function WaiterPage({ waiter }) {
  const [internalWaiter, setInternalWaiter] = useState(waiter);

  function onSubmit(e) {
    e.preventDefault();
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
      ...waiter,
      [e.target.name]: value
    });
  }

  return (
    <div className="entity-page">
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          id="name"
          value={internalWaiter.name}
          onChange={fieldChanged}
        />
        <label htmlFor="salary">Salary</label>
        <input
          type="number"
          min="1000"
          max="9999"
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
    </div>
  );
}

function mapStateToProps({ waiters }, { match }) {
  const waiter = waiters.list.find(waiter => waiter.id === +match.params.id);

  return {
    waiter: waiter
  };
}

export default connect(mapStateToProps)(WaiterPage);
