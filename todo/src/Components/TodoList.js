import React, { useReducer } from 'react';
import TodoForm from './todoForm';

import reducer from '../Reducers/todoReducer';
import { addTodo, removeTodo } from '../Reducers/todoReducer';
import { initialState } from '../Reducers/todoReducer';


//Form to add todo lists
//Function that adds form todo to list
//case is reducer for adding todo

// const initialState = {
//     todo: [
//         {
//         task: 'Learn about reducers...',
//         completed: false,
//         id: 3892987589
//         },
//         {
//         task: 'Whatever',
//         completed: false,
//         id: 3892987588
//         }
//     ]
// }

const TodoList = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log('state',state);

    // -------------- Older functions ------------------
    // const listItemAdd = (taskName) => {
    //     const item = {
    //       task: taskName,
    //       id: Date.now(),
    //       completed: false
    //     };
    
    //     const newTodo = [...this.state.todo, item]
    // }
    
    //  const listItemToggle = (taskId) => {
            // this.setState({
            //     todo: this.state.todo.map(item=>{
            //     if (item.id === taskId) {
            //         return {
            //         ...item,
            //         completed: !item.completed
            //         }
            //     }
            //     return(item);
            //     })
            // });
    //   }
    
    //   const listCompletedItemRemove = () => {
    //     const newTodo = this.state.todo.filter(item => {
    //       return(!item.completed)
    //     });
    //   }

    // ----------------Newer functions with reducers

    const listItemAdd = () => {
        dispatch(addTodo)
    }

    const listCompletedItemRemove = () => {
        dispatch(removeTodo())
    }

    const listItemToggle = () => {
        
    }



   



    return (
        <div>
            <div>
                <TodoForm listItemAdd={listItemAdd}/>
                <button onClick={listCompletedItemRemove}>Clear Completed Tasks</button>
            </div>
            <div>
                {
                    state.todo.map(item => (
                        <div key={item.id}>
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
