import React from 'react';
import StepListItemContainer from './step_list_item_container'

const StepList = (props) => {
    debugger;
    return(
        <ul>
            {props.steps.map((step) => {
                <StepListItemContainer/> 
            })}
        </ul>
    )
}

export default StepList;