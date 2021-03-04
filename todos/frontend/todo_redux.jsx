import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store'
import {
    receiveTodos,
    receiveTodo,
    removeTodo,
} from './actions/todo_actions';

document.addEventListener('DOMContentLoaded', () => {
    let store = configureStore()
    window.store = store
    ReactDOM.render(<Root />, document.getElementById('main'))
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
    window.removeTodo = removeTodo;
})
