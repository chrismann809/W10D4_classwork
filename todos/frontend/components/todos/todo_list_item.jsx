import React from 'react'
import StepList from '../step_list/step_list';
import TodoDetailView from './todo_detail_view';
// import TodoList from './todo_list';


class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: this.props.todo.done,
            detail: false,
        }
        this.updateDone = this.updateDone.bind(this);
        this.toggleDetail = this.toggleDetail.bind(this);
    }

    updateDone(e) {
        e.preventDefault();
        const status = this.state.done
        this.setState({
            done: !status
        });
    }

    toggleDetail(e) {
        e.preventDefault();
        this.setState({
            detail: !this.state.detail, 
        })
    }

    render () {
        let status = this.state.done;
        if (status) {
            status = 'Complete'
        } else {
            status = 'In Progress'
        }
        return (
            <li onClick={this.toggleDetail}>{this.props.todo.title} 
                {/* <button onClick={() => this.props.removeTodo(this.props.todo)}>Delete</button> */}
                <button onClick={this.updateDone} >{status}</button>
                {this.state.detail ? <TodoDetailView todo={this.props.todo} removeTodo={this.props.removeTodo} /> : ''}
            </li>
        );
    }
}

export default TodoListItem;