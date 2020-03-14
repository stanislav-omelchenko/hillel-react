import React from "react";
import { NavLink } from "react-router-dom";
import {
  faChevronRight,
  faChair,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar() {
  return (
    <>
      <NavLink to="/tables">
        <FontAwesomeIcon icon={faChair} className="menu-icon" />
        <span>Tables</span>
        <FontAwesomeIcon icon={faChevronRight} className="chevron" />
      </NavLink>
      <NavLink to="/waiters">
        <FontAwesomeIcon icon={faUsers} className="menu-icon" />
        <span>Waiters</span>
        <FontAwesomeIcon icon={faChevronRight} className="chevron" />
      </NavLink>
    </>
  );
}

export default NavBar;
