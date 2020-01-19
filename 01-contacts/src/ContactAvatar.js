import React, { Component } from "react";
import "./ContactAvatar.css";

export default class ContactAvatar extends Component {
  render() {
    let initials = this.props.name[0] + this.props.surname[0];
    return (
      <div
        className="contact-avatar"
        style={{
          width: this.props.size || "64px",
          height: this.props.size || "64px"
        }}
      >
        {initials}
      </div>
    );
  }
}
