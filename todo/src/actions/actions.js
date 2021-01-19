export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

const addTodo = (taskName) => {
    return({type:ADD_TODO, payload:taskName});
}

const removeTodo = (taskName) => {
    return({type:REMOVE_TODO, payload:taskName});
}

export default {
    addTodo:addTodo,
    removeTodo:removeTodo
}