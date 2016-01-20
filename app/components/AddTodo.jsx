import React from 'react';
import ReactDOM from 'react-dom';
import { TODO_CREATE } from '../constants/actionTypes';
import { connect } from 'react-redux';

let AddTodo = ({ dispatch }) => {
  const onKeyPress = (e) => {
    let todoText = e.target.value.trim();

    if (e.which === 13 && todoText) {
      dispatch({
        type: TODO_CREATE,
        text: todoText
      });

      e.target.value = '';
    }
  };

  return (
    <div className="todo-box">
      <input type="text"
        placeholder="Enter an item to do..."
        onKeyPress={onKeyPress} />
    </div>
  );
};

// Calling connect with no arguments automatically injects the dispatch method into the props.
AddTodo = connect()(AddTodo);

export default AddTodo;
