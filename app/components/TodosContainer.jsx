import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { TODO_DELETE, TODO_TOGGLE_COMPLETED } from '../constants/actionTypes';
import { connect } from 'react-redux';

// Describes how the store's state maps to the component's props.
const mapStateToProps = (state) => {
  return {
    todos: state
  };
};

// Describes how dispatch maps to the component's props.
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: id => {
      dispatch({
        type: TODO_TOGGLE_COMPLETED,
        id: id
      });
    },
    onTodoDelete: id => {
      dispatch({
        type: TODO_DELETE,
        id: id
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
