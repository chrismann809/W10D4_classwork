import React from 'react'
import StepList from '../step_list/step_list'
import { stepsByTodoId } from '../../reducers/selectors'

class TodoDetailView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            steps: store.getState().steps,
        }
    }

    render() {
        return (
            <div>
                <p>{this.props.todo.body}</p>
                <button onClick={() => this.props.removeTodo(this.props.todo)}>Delete</button>
                <StepList steps={ stepsByTodoId(this.state, this.props.todo.id) }/>
            </div>
            
        );
    }
}

// class todoDetailView extends React.Component {
//     render() {
//         return (

//             <button onClick={() => this.props.removeTodo(this.props.todo)}>Delete</button>
//         );
//     }
// }

export default TodoDetailView;