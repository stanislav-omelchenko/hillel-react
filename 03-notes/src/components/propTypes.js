import PropTypes from "prop-types";

const rectangle = PropTypes.shape({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  w: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired
});

const note = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rectangle: rectangle.isRequired
});

const notes = PropTypes.arrayOf(note);
export default {
  ...PropTypes,
  rectangle,
  note,
  notes
};
