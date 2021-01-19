import React, { useReducer } from 'react';
// import { ADD_TODO, REMOVE_TODO } from '../actions/actions';

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = (taskName) => {
    return({type:ADD_TODO, payload: taskName});
}

export const removeTodo = (taskName) => {
    return({type:REMOVE_TODO, payload:taskName});
}

export const initialState = {
    todo: [
        {
        task: 'Learn about reducers...',
        completed: false,
        id: 3892987589
        },
        {
        task: 'Whatever',
        completed: false,
        id: 3892987588
        }
    ]
}

const nextTodoId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1;
}

  function reducer(state, action) {
    switch (action.type) {
      case ADD_TODO:
        return {
            ...state,
            todo: [
                ...state.todo,
                {
                    task: action.payload,
                    completed: false,
                    id: nextTodoId(state.todo)
                }
            ]
        }
      default:
        return state
    }
  }

//   reducer(initialState, { type: 'add' });
//   reducer(initialState, { type: 'remove' });   

  export default reducer;


  // Actions 'describe' to our reducer function what event just took place and tell the reducer how to update state based on that event or 'action'

  //Actions must be objects, and they must have a type property. Alos they can have a payload property as well. 