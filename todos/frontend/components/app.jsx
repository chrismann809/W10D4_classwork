import React from 'react';
import TodoList from './todos/todo_list'
import TodoListContainer from './todos/todo_list_container'
// import {allTodos} from '../reducers/selectors'

const App = () => {
    // const todos = allTodos(store)
    return (
        <div>
            <h1>Todos App</h1>
            <TodoListContainer/>
        </div>
    )
}

export default App;