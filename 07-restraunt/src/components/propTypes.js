import PropTypes from "prop-types";

const waiter = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  salary: PropTypes.number.isRequired,
  startDate: PropTypes.number.isRequired
});

const table = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  seatsCount: PropTypes.number.isRequired
});

const waitersList = PropTypes.arrayOf(waiter);
const tablesList = PropTypes.arrayOf(table);

export default {
  ...PropTypes,
  waiter,
  table,
  waitersList,
  tablesList
};
