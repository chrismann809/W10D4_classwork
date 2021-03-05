import React from 'react'

const TodoList = (props) => {
    
    return(
        
        <div>
            <h3>Todo List:</h3>
            
            <ul>
                {props.todos.map((todo) => {
                    return <li key={todo.id}>{todo.title}</li>
                })}

            </ul>
        </div>
    );
 
};

export default TodoList