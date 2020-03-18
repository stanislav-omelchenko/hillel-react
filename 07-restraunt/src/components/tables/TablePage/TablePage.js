import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { saveTable } from "../../../store/actions/tables";
import propTypes from "../../propTypes";

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
    let value = e.target.value;

    switch (e.target.type) {
      case "range":
      case "number":
        value = +value;
        break;
      default:
        break;
    }
    setInternalTable({
      ...internalTable,
      [e.target.name]: value
    });
  }

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

TablePage.propTypes = {
  table: propTypes.table.isRequired,
  saveTable: propTypes.func.isRequired
};

function mapStateToProps({ tables }, { match }) {
  const table =
    match.params.id === "create"
      ? {
          name: "",
          description: "",
          seatsCount: 4
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
