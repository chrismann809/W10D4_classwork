import { connect } from 'react-redux';
import { removeTodo } from '../../actions/todo_actions';
import { receiveSteps } from '../../actions/step_actions';

const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo: (todo) => {
            return dispatch(removeTodo(todo))
        },
        receiveSteps: (step) => {
            return dispatch(receiveSteps(step))
        }
    }
}

export default connect(
    null, 
    mapDispatchToProps
)(TodoDetailView);