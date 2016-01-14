import React from 'react';
import ReactDOM from 'react-dom';
import TodoActions from './../actions/TodoActions';

class TodoItem extends React.Component {

  constructor(props) {
    super(props);
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  toggleCompleted(e) {
    TodoActions.toggleCompleted(this.props.todo.id);
  }

  removeTodo(e) {
    TodoActions.destroy(this.props.todo.id);
  }

  render() {
    let className = this.props.todo.completed ? 'completed' : '';

    return (
      <li className={className}>
        <p onClick={this.toggleCompleted}>{this.props.todo.text}</p>
        <button className="delete" onClick={this.removeTodo}>&#x02A2F;</button>
      </li>
    );
  }
}

export default TodoItem;
