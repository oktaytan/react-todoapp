import React, { Component } from 'react';
import uuid from 'uuid';
import Todos from './components/Todos';
import { AddTodo } from './components/AddTodo';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [
        { id: 1, content: 'buy some bread' },
        { id: 2, content: 'study English' },
        { id: 3, content: 'eat launch' }
      ]
    }
  }

  deleteTodo = id => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    })
  }

  addTodo = todo => {
    todo.id = uuid.v4();
    let todos = [...this.state.todos, todo];
    this.setState({ todos });
  }

  render() {
    return (
      <div className="todo-app container">
        <h2 className="center teal-text">Todo's</h2>
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
