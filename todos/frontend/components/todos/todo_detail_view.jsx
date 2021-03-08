import React from 'react'

const TodoDetailView = (props) => {
    return (
        <div>
            <p>{props.todo.body}</p>
            <button onClick={() => props.removeTodo(props.todo)}>Delete</button>
        </div>
        
    );
}

// class todoDetailView extends React.Component {
//     render() {
//         return (

//             <button onClick={() => this.props.removeTodo(this.props.todo)}>Delete</button>
//         );
//     }
// }

export default TodoDetailView;