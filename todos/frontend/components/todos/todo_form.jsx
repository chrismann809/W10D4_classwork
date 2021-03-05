import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: Math.floor(Math.random() * 1000000),
            title: '',
            body: '',
            done: false,
        };
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.updateDone = this.updateDone.bind(this);
    }

    updateTitle(e) {
        this.setState({
            title: e.target.value,
        });
    }
    
    updateBody(e) {
        this.setState({
            body: e.target.value,
        });
    }

    updateDone(e) {
        this.setState({
            done: e.target.value,
        });
    }

    render() {
        return (
            <form action="">
                <h1>Add Todo:</h1>
                <label>Title:
                    <input type="text" value={this.state.title} onChange={this.updateTitle}/>
                </label>

                <label>Body:
                    <input type="text" value={this.state.body} onChange={this.updateBody}/>
                </label>

                {/* <label>Title:
                    <input type="text" value={this.state.title} onChange={this.updateTitle}/>
                </label> */}
            </form>
        );
    }
}

export default TodoForm; 