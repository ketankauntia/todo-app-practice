import { useState } from 'react';
import './TodoInputField.css';

// onChange in <input> is used to update the state as the user types.
// onClick in <button> is used to perform an action (e.g., log the task).

function TodoInputField() {
  const [input, setInput] = useState('');

  function handleInputChange(e) {
    // console.log(e);
    // console.log(e.target.value);
    setInput(e.target.value);
  }

  function handleAddInput() {
    console.log(input);
  }

  return (
    <div>
      <input onChange={handleInputChange} className='inputBox' placeholder='Add Task..' />

      <button onClick={handleAddInput} className='inputBtn'>
        Add Todo
      </button>
    </div>
  );
}

export default TodoInputField;
