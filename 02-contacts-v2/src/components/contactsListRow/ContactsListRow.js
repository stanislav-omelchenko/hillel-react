import React, { Component } from "react";

import ContactAvatar from "../contactAvatar/ContactAvatar";

import propTypes from "../propTypes";

export default class ContactsListRow extends Component {
  onRowClick = () => {
    this.props.onContactRowClick(this.props.contact.id);
  };

  onDeleteButtonClick = e => {
    e.stopPropagation();
    this.props.onContactDeleteClick(this.props.contact.id);
  };

  render() {
    const { name, surname, age, phone } = this.props.contact;

    return (
      <div
        onClick={this.onRowClick}
        className={
          "contacts-list-row " + (this.props.isSelected ? "selected" : "")
        }
      >
        <ContactAvatar name={name} surname={surname} size="42px" />

        <span className="contact-name">
          {name} {surname}, {age}
        </span>
        <span className="contact-phone">{phone}</span>
        <button onClick={this.onDeleteButtonClick}>X</button>
      </div>
    );
  }
}

ContactsListRow.propTypes = {
  contact: propTypes.contact.isRequired,
  isSelected: propTypes.bool.isRequired,
  onContactRowClick: propTypes.func.isRequired,
  onContactDeleteClick: propTypes.func.isRequired
};
