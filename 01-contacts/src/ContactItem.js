import React, { Component } from "react";
import ContactAvatar from "./ContactAvatar";
import "./ContactItem.css";

export default class ContactItem extends Component {
  render() {
    let { id, age, name, surname, phone } = this.props.contact;
    return (
      <li className="contact-item">
        <div className="contact-avatar-cell">
          <ContactAvatar size="40px" name={name} surname={surname} />
        </div>
        <span className="contact-name-cell">
          <strong>
            <span>{name}</span> <span>{surname}</span>
          </strong>
          <span>, {age}</span>
        </span>
        <em className="contact-phone-cell">{phone}</em>
      </li>
    );
  }
}
