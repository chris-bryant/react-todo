import React from 'react';
import ReactDOM from 'react-dom';

class TodoInput extends React.Component {
  handleSubmit(e) {
    let todoText = ReactDOM.findDOMNode(this.refs.todo);
    if (e.which != 13 || !todoText.value.trim()) {
      return;
    }

    let newTodo = { completed: false, text: todoText.value.trim() };

    this.props.onAdd(newTodo);

    todoText.value = '';
  }

  render() {
    return (
      <div className="todo-box">
        <input type="text" onKeyPress={this.handleSubmit.bind(this)} ref="todo"></input>
      </div>
    );
  }
}

export default TodoInput;
