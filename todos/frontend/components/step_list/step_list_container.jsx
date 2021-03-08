import { connect } from 'react-redux';
import { receiveStep } from '../../actions/step_actions';
import { stepsByTodoId } from '../../reducers/selectors';
import StepList from './step_list'

const mapDispatchToProps = (dispatch) => {
    return {
        receiveStep: (step) => {
            dispatch(receiveStep(step))
        }
    }
}

const mapStateToProps = (state, {todo_id}) => {
    return {
        steps: stepsByTodoId(state, todo_id), todo_id
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(StepList)