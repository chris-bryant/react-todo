import React from 'react';
import ReactDOM from 'react-dom';

var TodoItem = ({
  onClick,
  onDelete,
  text,
  completed
}) => (
  <li className={completed ? 'completed' : ''}>
    <p onClick={onClick}>{text}</p>
    <button className="delete" onClick={onDelete}>
      &#x02A2F;
    </button>
  </li>
);

export default TodoItem;
