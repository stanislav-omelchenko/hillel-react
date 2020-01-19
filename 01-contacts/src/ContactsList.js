import React, { Component } from "react";
import ContactItem from "./ContactItem";

export default class ContactsList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    );
  }
}
