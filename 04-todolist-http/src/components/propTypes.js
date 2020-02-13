import PropTypes from "prop-types";

const todoItem = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired
});

const todoList = PropTypes.arrayOf(todoItem);

export default {
  ...PropTypes,
  todoItem,
  todoList
};
