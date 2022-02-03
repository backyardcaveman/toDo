import React, { useState } from 'react';
import Form from './Form';
import Item from './Item';

function List() {
  const [todos, setTodos] = useState([]);

  const addItem = todo => {
    if(todo.text === '') {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const deleteTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArr);
  };

  const finishTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <Form onSubmit={addItem} />
      <Item
        todos={todos}
        finishTodo={finishTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default List;