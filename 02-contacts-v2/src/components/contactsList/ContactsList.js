import React, { Component } from "react";

import ContactsListRow from "../contactsListRow/ContactsListRow";

import propTypes from "../propTypes";

export default class ContactsList extends Component {
  render() {
    return (
      <>
        <div className="contacts-list">
          {this.props.contacts.map(contact => (
            <ContactsListRow
              key={contact.id}
              contact={contact}
              isSelected={contact.id === this.props.currentContact.id}
              onContactRowClick={this.props.onContactRowClick}
              onContactDeleteClick={this.props.onContactDeleteClick}
            />
          ))}
        </div>
      </>
    );
  }
}

ContactsList.propTypes = {
  contacts: propTypes.contactsList.isRequired,
  currentContact: propTypes.contact.isRequired,
  onContactRowClick: propTypes.func.isRequired,
  onContactDeleteClick: propTypes.func.isRequired
};
