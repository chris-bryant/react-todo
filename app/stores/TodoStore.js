import TodoDispatcher from './../dispatcher/TodoDispatcher';
import EventEmitter from 'events';
import * as ActionTypes from './../constants/actionTypes';
import assign from 'object-assign';

let _todos = [];
let CHANGE_EVENT = 'change';

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.dispatcherIndex = TodoDispatcher.register(function(payload) {
      switch (payload.action) {
        case ActionTypes.TODO_CREATE:
          let text = payload.text.trim();
          let id = _todos.length;

          _todos[id] = { id, completed: false, text};
          this.emitChange();
          break;

        case ActionTypes.TODO_DESTROY:
          let tempTodos = _todos.slice();
          delete tempTodos[payload.id];

          _todos = tempTodos;
          this.emitChange();
          break;

        case ActionTypes.TODO_TOGGLE_COMPLETED:
          _todos[payload.id].completed = !_todos[payload.id].completed;
          this.emitChange();
          break;
      }
    }.bind(this));
  }

  getAll() {
    return _todos;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}



export default new TodoStore();
