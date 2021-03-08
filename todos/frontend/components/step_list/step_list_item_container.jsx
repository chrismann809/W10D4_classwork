import { connect } from 'react-redux';
import { removeStep, receiveStep } from '../../actions/step_actions';

const mapDispatchToProps = (dipatch) => {
    return{
        removeStep: (step) => {
            dispatch(removeStep(step))
        },

        receiveStep: (step) => {
            dipatch(receiveStep(step))
        }
    }
}


export default connect (
    null,
    mapDispatchToProps
) (StepListItem)
