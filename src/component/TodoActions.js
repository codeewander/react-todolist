import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import '../style/TodoActions.scss'

class TodoActions extends Component {
  render() {
    return (
      <div className="actions">
        <RadioGroup
          className="actions-container"
        >
          <FormControlLabel control={<Radio value="all" />} label="全部清單" />
          <FormControlLabel control={<Radio value="active" />} label="代辦清單" />
          <FormControlLabel control={<Radio value="completed" />} label="已完成" />
        </RadioGroup>
      </div >
    )
  }
}

export default TodoActions