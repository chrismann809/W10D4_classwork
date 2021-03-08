import React from 'react';

class StepListItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        debugger;
        return (
            <div>
                <h3>{this.props.step.title}</h3>
            </div>
        );
    }
}

export default StepListItem;