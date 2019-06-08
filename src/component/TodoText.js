import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import '../style/TodoText.scss'

class TodoText extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }
  onChange = e => {
    this.setState({
      text: e.target.value
    });
  }

  onKeyDown = e => {
    e.keyCode === 13 && this.createTodo()
  }

  createTodo = () => {
    if (!this.state.text) {
      return
    }
    this.props.addTodo(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <TextField
          placeholder="請輸入代辦事項"
          id="outlined-dense"
          variant="outlined"
          label="Todo"
          margin="dense"
          className="text-field"
          value={this.state.text}
          onKeyDown={this.onKeyDown}
          onChange={this.onChange}
          onSubmit={this.createTodo}
        />
      </div>
    )
  }
}


export default TodoText;