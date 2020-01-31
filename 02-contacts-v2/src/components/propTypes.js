import PropTypes from "prop-types";

const contact = PropTypes.shape({
  id: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
});

const contactsList = PropTypes.arrayOf(contact);

export default {
  ...PropTypes,
  contact,
  contactsList
};
