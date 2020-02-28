import { connect } from "react-redux";
import TodoEditModal from "../../components/todoEditModal/TodoEditModal";
import { commitTodo, cancelEditing, editField } from "../../store/actions";

function mapStateToProps(state) {
  return {
    currentTodo: state.currentTodo,
    modalVisibility: state.modalVisibility
  };
}

const mapDispatchToProps = {
  commitTodo: commitTodo,
  cancelEditing: cancelEditing,
  editField: editField
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoEditModal);
