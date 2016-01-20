import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';

var TodoList = ({
  todos,
  onTodoClick,
  onTodoDelete
}) => (
  <ul className="todo-list">
    {todos.map(todo =>
      <TodoItem
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
        onDelete={() => onTodoDelete(todo.id)}
      >
      </TodoItem>
    )}
  </ul>
);

export default TodoList;
