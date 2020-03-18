import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, useRouteMatch } from "react-router-dom";

function TablesListItem({ table, deleteTable }) {
  const { url } = useRouteMatch();

  function onDeleteClick(e) {
    e.preventDefault();
    deleteTable(table.id);
  }

  return (
    <tr>
      <td className="shrink">{table.id}</td>
      <td className="shrink">{table.name}</td>
      <td className="expand">{table.description}</td>
      <td className="shrink">{table.seatsCount}</td>

      <td className="shrink">
        <Link to={`${url}/${table.id}`}>
          <button>
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
        </Link>
        <button onClick={onDeleteClick}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
}

export default TablesListItem;
