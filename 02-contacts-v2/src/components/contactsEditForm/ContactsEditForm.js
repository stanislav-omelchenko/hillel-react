import React, { Component } from "react";
import ContactAvatar from "../contactAvatar/ContactAvatar";
import propTypes from "../propTypes";

export default class ContactsEditForm extends Component {
  onInputChanged = e => {
    this.props.onInputChanged({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSaveClick(this.props.currentContact);
  };

  render() {
    const { id, name, surname, age, phone } = this.props.currentContact;
    const disabled = id === 0;
    return (
      <div className="contacts-edit-form">
        <form onSubmit={this.onFormSubmit}>
          <header className="contact-edit-form-header">
            <ContactAvatar name={name} surname={surname} size="5rem" />
          </header>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={this.onInputChanged}
            disabled={disabled}
          />
          <label htmlFor="surname">Surname:</label>
          <input
            id="surname"
            name="surname"
            type="text"
            value={surname}
            onChange={this.onInputChanged}
            disabled={disabled}
          />
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            name="age"
            type="text"
            value={age}
            onChange={this.onInputChanged}
            disabled={disabled}
          />
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={phone}
            onChange={this.onInputChanged}
            disabled={disabled}
          />
          <button disabled={id === 0}>Save Contact</button>
        </form>
      </div>
    );
  }
}

ContactsEditForm.propTypes = {
  currentContact: propTypes.contact.isRequired,
  onInputChanged: propTypes.func.isRequired,
  onSaveClick: propTypes.func.isRequired
};
