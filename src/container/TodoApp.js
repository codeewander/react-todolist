import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TodoList from '../component/TodoList'
import TodoText from '../component/TodoText';
import '../style/TodoApp.scss';

class TodoApp extends Component {
  constructor() {
    super()
    this.state = {
      todolist: []
    }
  }

  handleAddTodo = (text) => {
    let todolist = this.state.todolist
    let id = this.state.todolist.length + 1
    todolist.push({ text: text, completed: false, id: id })
    this.setState({
      todolist: todolist
    })
  }

  handleRemoveTodo = (index) => {
    let todolist = this.state.todolist
    todolist.splice(index, 1);
    this.setState({
      todolist: todolist
    })
  }

  handleCompleteTodo = (e, index) => {
    const isChecked = e.target.checked
    this.setState(preState => {
      const todolist = preState.todolist
      todolist[index].completed = isChecked
      return {
        todolist: todolist
      }
    })
  }

  render() {
    return (
      <div className="container">
        <Paper className="content-wrapper">
          <h1>To-do List</h1>
          <TodoText addTodo={this.handleAddTodo} />
          <TodoList todolist={this.state.todolist} removeTodo={this.handleRemoveTodo} handleCompleteTodo={this.completeTodo} />
        </Paper>
      </div>
    );
  }

}

export default TodoApp;
