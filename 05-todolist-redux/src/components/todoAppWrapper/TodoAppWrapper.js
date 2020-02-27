import { connect } from "react-redux";
import TodoApp from "../todoApp/TodoApp";
import { commitTodo, removeTodo } from "../../store/actions";

function mapStateToProps(state) {
  return {
    todos: state.todos,
    currentTodo: state.currentTodo
  };
}

const mapDispatchToProps = {
  commit: commitTodo,
  remove: removeTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
