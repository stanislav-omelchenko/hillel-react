import React, { Component } from "react";
import ContactItem from "./ContactItem";
import "./ContactsList.css";

export default class ContactsList extends Component {
  render() {
    return (
      <ul className="contacts-list">
        {this.props.contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    );
  }
}
