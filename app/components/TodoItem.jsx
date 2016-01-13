import React from 'react';
import ReactDOM from 'react-dom';

class TodoItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = { completed: props.completed };
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  toggleCompleted(e) {
    this.setState({completed: !this.state.completed});
  }

  removeTodo(todo) {
    this.props.onDelete(todo);
  }

  render() {
    let className = this.state.completed ? 'completed' : '';

    return (
      <li className={className} onClick={this.toggleCompleted}>
        <span>{this.props.text}</span>
        <button className="delete" onClick={this.removeTodo}>&#x02A2F;</button>
      </li>
    );
  }
}

export default TodoItem;
