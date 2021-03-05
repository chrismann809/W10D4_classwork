import React from 'react'
import TodoList from './todo_list';


const TodoListItem = (props) => {
    let status = props.todo.done;
    if (status) {
        status = 'Complete'
    } else {
        status = 'In Progress'
    }
    return (
        <li>{props.todo.title} 
            <button onClick={() => props.removeTodo(props.todo)}>Delete</button>
            <button onClick={() => props.todo.setState({ done: !props.todo.done })} >{status}</button>
        </li>
    );
}

export default TodoListItem