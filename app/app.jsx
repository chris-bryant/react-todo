import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TodoApp from './components/TodoApp';
import todos from './reducers/todos';

// Provider passes the store down to all child components.
ReactDOM.render(
  <Provider store={createStore(todos, [])}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
