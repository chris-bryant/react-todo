import React from 'react';
import ReactDOM from 'react-dom';
import TodoActions from './../actions/TodoActions';

class TodoInput extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    let todoTextNode = ReactDOM.findDOMNode(this.refs.todo);
    let todoText = todoTextNode.value.trim();

    if (e.which != 13 || !todoText) {
      return;
    }

    TodoActions.create(todoText);
    todoTextNode.value = '';
  }

  render() {
    return (
      <div className="todo-box">
        <input type="text" onKeyPress={this.handleSubmit} ref="todo" placeholder="Enter an item to do..."></input>
      </div>
    );
  }
}

export default TodoInput;
