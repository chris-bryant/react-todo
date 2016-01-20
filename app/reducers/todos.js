import { TODO_CREATE, TODO_DELETE, TODO_TOGGLE_COMPLETED } from '../constants/actionTypes';

export default function todos(state = [], action) {
  switch (action.type) {
    case TODO_CREATE:
      return [
        {
          id: state.length + 1,
          text: action.text,
          completed: false
        },
        ...state
      ];

    case TODO_DELETE:
      return state.filter(todo => todo.id != action.id);

    case TODO_TOGGLE_COMPLETED:
      return state.map(todo =>
        todo.id === action.id ? Object.assign({}, todo, { completed: !todo.completed }) : todo
      );

    default:
      return state;
  }
}
