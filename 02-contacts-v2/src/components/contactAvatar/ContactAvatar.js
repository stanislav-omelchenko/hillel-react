import React, { Component } from "react";

import propTypes from "../propTypes";
import "./ContactAvatar.scss";

export default class ContactAvatar extends Component {
  render() {
    let initials = (this.props.name[0] || "") + (this.props.surname[0] || "");
    return (
      <div
        className="contact-avatar"
        style={{
          width: this.props.size || "64px",
          height: this.props.size || "64px"
        }}
      >
        <span>{initials || ""}</span>
      </div>
    );
  }
}

ContactAvatar.propTypes = {
  name: propTypes.string.isRequired,
  surname: propTypes.string.isRequired,
  size: propTypes.string
};
