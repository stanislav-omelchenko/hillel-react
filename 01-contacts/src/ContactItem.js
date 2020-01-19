import React, { Component } from "react";
import "./ContactItem.css";
export default class ContactItem extends Component {
  render() {
    let { id, age, name, surname, phone } = this.props.contact;
    return (
      <li>
        <strong>
          <span>{name}</span> <span>{surname}</span>&nbsp;
        </strong>
        <span>{age}</span> - <em>{phone}</em>
      </li>
    );
  }
}
