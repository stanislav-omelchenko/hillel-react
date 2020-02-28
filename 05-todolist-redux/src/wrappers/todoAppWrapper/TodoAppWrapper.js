import { connect } from "react-redux";
import TodoApp from "../../components/todoApp/TodoApp";
import { commitTodo, removeTodo, startEditing } from "../../store/actions";

function mapStateToProps(state) {
  return {
    todos: state.todos,
    currentTodo: state.currentTodo
  };
}

const mapDispatchToProps = {
  commitTodo: commitTodo,
  removeTodo: removeTodo,
  startEditing: startEditing
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
