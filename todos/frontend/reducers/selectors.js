export const allTodos = (state) => {
    return Object.values(state.todos);
}

export const stepsByTodoId = (state, todoId) => {
    const steps = Object.values(state.steps);
    const validSteps = []
    steps.forEach((step) => {
        if (step.todo_id === todoId) validSteps.push(step)
    });
    return validSteps   
};