import React, { Component } from "react";
import propTypes from "../propTypes";

export default class ContactsAddButton extends Component {
  render() {
    return (
      <div className="contacts-add">
        <button onClick={this.props.onContactAddClick}>Create contact</button>
      </div>
    );
  }
}

ContactsAddButton.propTypes = {
  onContactAddClick: propTypes.func.isRequired
};
