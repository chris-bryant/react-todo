import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import TodoStore from './../stores/TodoStore';

function getTodoState() {
  return {
    todos: TodoStore.getAll()
  };
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = getTodoState();

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getTodoState());
  }

  renderTodos() {
    return (
      <ul className="todo-list">
        {this.state.todos.map((todo, i) => {
          return <TodoItem key={i} todo={todo}></TodoItem>;
        })}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <TodoInput></TodoInput>
        <div className="box">
          {this.renderTodos()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('app'));
