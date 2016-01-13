import TodoDispatcher from 'TodoDispatcher';
import EventEmitter from 'events';
import ActionTypes from './constants/actionTypes';

let _todos = [];

let TodoStore = assign({}, EventEmitter.prototype, {
  getAll() {
    return _todos;
  }
});

TodoDispatcher.register(function (action) {
  switch (action.type) {
    case ActionTypes.TODO_CREATE:
      let text = action.text.trim();
      _todos.push(text);
      TodoStore.emitChange();
  }
});

export default TodoStore;
