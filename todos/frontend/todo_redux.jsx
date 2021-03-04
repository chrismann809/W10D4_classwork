import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store'
import {
    receiveTodos,
    receiveTodo,
    removeTodo,
} from './actions/todo_actions';
import {
    receiveSteps,
    receiveStep,
    removeStep,
} from './actions/step_actions';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Root />, document.getElementById('main'))
    let store = configureStore()
    window.store = store

    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
    window.removeTodo = removeTodo;
    
    window.receiveSteps = receiveSteps;
    window.receiveStep = receiveStep;
    window.removeStep = removeStep;
})
