import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemText from '@material-ui/core/ListItemText';
import TodoActions from './TodoActions';

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentFilter: 'all',
    }
  }

  handleFilter = (e) => {
    const value = e.target.value
    this.setState({ currentFilter: value });
  }

  render() {
    const { currentFilter } = this.state
    const { todolist } = this.props;
    const filtered = todolist.filter((todo) => {
      if (currentFilter === 'all') {
        return todo
      } else if (currentFilter === 'active') {
        return todo.completed === false
      } return todo.completed
    })
    return (
      <div>
        <List>
          {filtered.map((todo, index) =>
            < ListItem key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              <Checkbox
                color="primary"
                value={todo.text}
                checked={todo.completed}
                onChange={(e) => this.props.completeTodo(e, index)}
              />
              <ListItemText primary={todo.text} />
              <p>{todo.completed}</p>
              <IconButton onClick={() => this.props.removeTodo(index)} >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          )}
        </List>
        <TodoActions
          handleFilter={this.handleFilter}
          currentFilter={currentFilter}
        />
      </div >
    )
  }
}


export default TodoList;