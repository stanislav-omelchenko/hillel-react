import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

function WaitersListItem({ waiter }) {
  return (
    <tr>
      <td className="shrink">{waiter.id}</td>
      <td className="expand">{waiter.name}</td>
      <td className="shrink">${waiter.salary}</td>
      <td className="shrink">
        {new Date(waiter.startDate * 1000).toDateString()}
      </td>

      <td className="shrink">
        <button>
          <FontAwesomeIcon icon={faPencilAlt} />
        </button>
        <button>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
}

export default WaitersListItem;
