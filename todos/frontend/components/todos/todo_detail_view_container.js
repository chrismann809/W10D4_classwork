import { connect } from 'react-redux';
import { removeTodo } from '../../actions/todo_actions';

const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo: (todo) => {
            return dispatch(removeTodo(todo))
        }
    }
}

export default connect(
    null, 
    mapDispatchToProps
)(TodoDetailView);