import PropTypes from "prop-types";

const position = PropTypes.shape({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
});

const note = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  position: position.isRequired
});

const notes = PropTypes.arrayOf(note);
export default {
  ...PropTypes,
  position,
  note,
  notes
};
