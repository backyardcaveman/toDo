import React, { useState} from 'react';

function Form(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const changeHandler = event => {
    setInput(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    props.onSubmit({
      id: Math.random() * 10000,
      text: input
    });
    setInput('');
  };

  return (
      <React.Fragment>
          <div className='title'>
            <h1>To Do List</h1>
          </div>
          <form onSubmit={submitHandler} className='todo-form'>
      (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={changeHandler}
            name='text'
            className='todo-input'
          />
          <button onClick={submitHandler} className='todo-btn'>
            Add todo
          </button>
        </>
      )
    </form>
      </React.Fragment>
    
  );
}

export default Form;