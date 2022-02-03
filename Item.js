import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

const Item = ({ todos, finishTodo, deleteTodo }) => {

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'added-todo complete' : 'added-todo'}
      key={index}
    >
      <div className='text' key={todo.id} onClick={() => finishTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => deleteTodo(todo.id)}
          className='remove-icon'
        />
      </div>
    </div>
  ));
};

export default Item;