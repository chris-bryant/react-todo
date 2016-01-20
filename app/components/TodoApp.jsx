import React from 'react';
import ReactDOM from 'react-dom';
import AddTodo from './AddTodo';
import TodosContainer from './TodosContainer';

// Export default takes the name of the file if no export name is specified.
export default () => (
  <div>
    <AddTodo />
    <div className="box">
      <TodosContainer />
    </div>
  </div>
);
