import {RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP} from '../actions/step_actions';

const initialStateSteps = {
    1: { // this is the step with id = 1
        id: 1,
        title: 'walk to store',
        done: false,
        todo_id: 1
    },
    2: { // this is the step with id = 2
        id: 2,
        title: 'buy soap',
        done: false,
        todo_id: 1
    }
}

const stepsReducer = (state = initialStateSteps, action) => {
    Object.freeze(state);
    let nextState = {};
    switch (action.type) {
        case RECEIVE_STEPS:
            action.steps.forEach (step => {
                nextState[step.id] = step
            });
            return nextState;

        case RECEIVE_STEP:
            const receivedStep = {[action.step.id]: action.step}
            return Object.assign({}, state, receivedStep)

        case REMOVE_STEP:
            nextState = Object.assign({}, state)
            let i = action.step.id;
            delete nextState[i];
            return nextState;

    default:
      return state;
  }
};

export default stepsReducer;