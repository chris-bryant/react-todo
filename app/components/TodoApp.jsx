import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import TodoStore from './../stores/TodoStore';
import TodoActions from './../actions/TodoActions';

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

  render() {
    return (
      <div>
        <TodoInput />
        <div className="box">
          <TodoList todos={this.state.todos}
            onTodoClick={id => TodoActions.toggleCompleted(id)}
            onTodoDelete={id => TodoActions.destroy(id)}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('app'));
