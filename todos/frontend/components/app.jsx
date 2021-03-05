import React from 'react';
import TodoList from './todos/todo_list'
import TodoListContainer from './todos/todo_list_container'
// import TodoForm from './todos/todo_form'

// import {allTodos} from '../reducers/selectors'

const App = () => {
    // const todos = allTodos(store)
    return (
        <div>
            <h1>Todos App</h1>
            <TodoListContainer/>
            {/* <TodoForm/> */}
        </div>
    )
}

export default App;