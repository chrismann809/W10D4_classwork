import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import App from './components/app';
import configureStore from './store/store';
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
import {
    allTodos,
    stepsByTodoId
} from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
    // ReactDOM.render(<App />, document.getElementById('main'));
    let store = configureStore()
    ReactDOM.render(<Root store={store}/>, document.getElementById('main'));
    window.store = store

    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
    window.removeTodo = removeTodo;
    
    window.receiveSteps = receiveSteps;
    window.receiveStep = receiveStep;
    window.removeStep = removeStep;

    window.allTodos = allTodos;

    window.stepsByTodoId = stepsByTodoId;
})
