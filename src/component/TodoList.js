import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemText from '@material-ui/core/ListItemText';

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentFilter: 'all',
    }
  }

  render() {
    return (
      <div>
        <List>
          {this.props.todolist.map((todo, index) =>
            < ListItem key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              <Checkbox
                color="primary"
                onChange={(e) => this.props.completeTodo(e, index)}
                checked={false}
                value={todo.text}
              />
              <ListItemText primary={todo.text} />
              <p>{todo.completed}</p>
              <IconButton onClick={() => this.props.removeTodo(index)} >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          )}
        </List>
      </div >
    )
  }
}


export default TodoList;