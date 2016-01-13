import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

let todos = [
  { completed: false, text: "Chips" },
  { completed: false, text: "Crackers" },
  { completed: false, text: "Hummus" },
  { completed: false, text: "Carrots" }
];

class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = { todos: props.todos };

    this.removeTodo = this.removeTodo.bind(this);
  }

  renderTodos() {
    return (
      <ul className="todo-list">
        {this.state.todos.map((todo, i) => {
          return <TodoItem key={i} text={todo.text} completed={todo.completed} onDelete={this.removeTodo.bind(i)}></TodoItem>;
        })}
      </ul>
    );
  }

  addTodo(newTodo) {
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  removeTodo(todoIndex) {
    let tempTodos = this.state.todos.slice();
    tempTodos.splice(todoIndex, 1);
    this.setState({ todos: tempTodos });
  }

  render() {
    return (
      <div>
        <TodoInput onAdd={this.addTodo.bind(this)}></TodoInput>
        <div className="box">
          {this.renderTodos()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TodoApp todos={todos} />, document.getElementById('app'));
