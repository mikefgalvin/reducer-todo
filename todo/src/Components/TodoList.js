import React, { useReducer } from 'react';
import TodoForm from './todoForm';

import reducer from '../Reducers/todoReducer';
import { addTodo, removeTodo, toggleTodo } from '../Reducers/todoReducer';
import { initialState } from '../Reducers/todoReducer';


const TodoList = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log('state',state);

    
    const taskClick = (item) => {
          dispatch(toggleTodo(item));
    }

    const removeIt = () => {
        dispatch(removeTodo());
    }



    return (
        <div>
            <div>
                <TodoForm addTodo={addTodo}  dispatch={dispatch}/>
                <button onClick={removeIt}>Clear Completed Tasks</button>
            </div>
            <div>
                {
                    state.todo.map(item => (
                        <div key={item.id} onClick={() => {taskClick(item.id)}} className={`listItem${item.completed ? ' completed' : ''}`}>
                            <p>{item.task}</p>
                            <p><span>&#10003;</span></p>
                        </div>     
                    ))
                }
                {/* <p>{state.task}</p>
                <p><span>&#10003;</span></p> */}
            </div>


        </div>
    )
}

export default TodoList;
