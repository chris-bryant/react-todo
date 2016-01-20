import TodoDispatcher from './../dispatcher/TodoDispatcher';
import * as ActionTypes from './../constants/actionTypes';

let TodoActions = {
  create: (text) => {
    TodoDispatcher.dispatch({
      action: ActionTypes.TODO_CREATE,
      text: text
    });
  },

  destroy: (id) => {
    TodoDispatcher.dispatch({
      action: ActionTypes.TODO_DELETE,
      id: id
    });
  },

  toggleCompleted: (id) => {
    TodoDispatcher.dispatch({
      action: ActionTypes.TODO_TOGGLE_COMPLETED,
      id: id
    });
  }
};

export default TodoActions;
