import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TodoList from '../component/TodoList'
import TodoText from '../component/TodoText';
import TodoActions from '../component/TodoActions';
import '../style/TodoApp.scss';

class TodoApp extends Component {
  constructor() {
    super()
    this.state = {
      todolist: []
    }
  }

  addTodo = (text) => {
    let prevlist = this.state.todolist
    let id = this.state.todolist.length + 1
    prevlist.push({ text: text, completed: false, id: id })
    this.setState({
      todolist: prevlist
    })
  }

  handleRemoveTodo = (index) => {
    let todos = this.state.todolist
    todos.splice(index, 1);
    this.setState({
      todolist: todos
    })
  }

  completeTodo = (e, index) => {
    const isChecked = e.target.checked
    console.log(isChecked)
    // this.setState(prevState => {
    //   const todos = [...prevState.todolist]
    //   todos[index].completed = !isChecked
    //   return {
    //     todolist: todos
    //   }
    // })
  }

  render() {
    return (
      <div className="container">
        <Paper className="content-wrapper">
          <h1>To-do List</h1>
          <TodoText addTodo={this.addTodo} />
          <TodoList todolist={this.state.todolist} removeTodo={this.handleRemoveTodo} completeTodo={this.completeTodo} />
          <TodoActions />
        </Paper>
      </div>
    );
  }

}

export default TodoApp;
