import React from "react";
import { connect } from "react-redux";
import TablesListItem from "../TablesListItem/TablesListItem";
import { Link, useRouteMatch } from "react-router-dom";
import { deleteTable, setTableSearch } from "../../../store/actions/tables";
import { escapeRegExp } from "../../../utils";

function TablesList({
  tables,
  search,
  currentRequestsCount,
  deleteTable,
  setTableSearch
}) {
  const { url } = useRouteMatch();

  return (
    <>
      <div className="search">
        <label htmlFor="search-bar">Search: </label>
        <input
          id="search-bar"
          className="search-field"
          value={search}
          onChange={({ target }) => setTableSearch(target.value)}
        />
      </div>
      <table className="table tables-table">
        <thead>
          <tr>
            <td className="shrink">ID</td>
            <td className="shrink">Name</td>
            <td className="expand">Description</td>
            <td className="shrink">Seats</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {tables.map(table => (
            <TablesListItem
              key={table.id}
              table={table}
              deleteTable={deleteTable}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5">
              <Link to={`${url}/create`}>
                <button>Add new table</button>
              </Link>
            </td>
          </tr>
        </tfoot>
      </table>
      <div
        className={
          currentRequestsCount > 0 ? "loading active" : "loading inactive"
        }
      >
        <span>Loading...</span>
      </div>
    </>
  );
}

function mapStateToProps({ tables }) {
  const rex = new RegExp(escapeRegExp(tables.search), "gi");
  return {
    tables: tables.list.filter(table => table.name.match(rex)),
    search: tables.search,
    currentRequestsCount: tables.currentRequestsCount
  };
}

const mapDispatchToProps = {
  deleteTable: deleteTable,
  setTableSearch: setTableSearch
};

export default connect(mapStateToProps, mapDispatchToProps)(TablesList);
