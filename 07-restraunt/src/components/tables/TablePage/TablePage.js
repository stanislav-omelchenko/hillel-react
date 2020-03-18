import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { saveTable } from "../../../store/actions/tables";

function TablePage({ table, saveTable }) {
  const [internalTable, setInternalTable] = useState(table);

  const history = useHistory();

  function onSubmit(e) {
    e.preventDefault();
    saveTable(internalTable);
    history.push("/tables");
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
    setInternalTable({
      ...internalTable,
      [e.target.name]: value
    });
  }

  console.log(internalTable);
  return (
    <div className="entity-page">
      {table !== undefined ? (
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            value={internalTable.name}
            onChange={fieldChanged}
          />
          <label htmlFor="description">Description</label>
          <input
            name="description"
            id="description"
            value={internalTable.description}
            onChange={fieldChanged}
          />
          <label htmlFor="seatsCount">Seats count</label>
          <input
            name="seatsCount"
            type="range"
            min="1"
            max="6"
            id="seatsCount"
            value={internalTable.seatsCount}
            onChange={fieldChanged}
          />
          <div className="range-value">{internalTable.seatsCount}</div>
          <button type="submit">Save</button>
        </form>
      ) : (
        <Redirect to="/tables" />
      )}
    </div>
  );
}

function mapStateToProps({ tables }, { match }) {
  console.log(tables);
  const table =
    match.params.id === "create"
      ? {
          name: "",
          salary: 50,
          startDate: Math.floor(Date.now() / 1000)
        }
      : tables.list.find(table => table.id === match.params.id);

  return {
    table: table
  };
}

const mapDispatchToProps = {
  saveTable: saveTable
};

export default connect(mapStateToProps, mapDispatchToProps)(TablePage);
