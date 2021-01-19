import React, { useState } from 'react';

const TodoForm = props => {
    
    const [inputValue, setInputValue] = useState('')
      

      const formChanges = e => {
          setInputValue(e.target.value)
      };

      const formSubmit = e => {
          e.preventDefault();
          props.dispatch(props.addTodo(inputValue));
          console.log('input value during submit', inputValue);
          setInputValue('')
        }

        return (
            <form onSubmit={formSubmit}>
                <input value={inputValue} onChange={formChanges} type='text' name='item' placeholder='Type a task'/>
                <button>Add</button>
            </form>
        )
}

export default TodoForm;