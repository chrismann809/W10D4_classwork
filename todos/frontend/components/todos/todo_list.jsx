import React from 'react'
import TodoForm from './todo_form'
import TodoListItem from './todo_list_item'

const TodoList = (props) => {
    
    return(
        
        <div>
            <h3>Todo List:</h3>
            
            <ul>
                {props.todos.map((todo) => {
                    return <TodoListItem key={todo.id} todo={todo} receiveTodo = {props.receiveTodo} removeTodo = {props.removeTodo} />;
                })}
            </ul>

            <TodoForm receiveTodo = {props.receiveTodo} />
        </div>
    );
 
};

export default TodoList