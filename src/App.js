import React from 'react';

class ToDoList extends React.Component {
  state = {
    tasks: [],
    inputValue: '',
  };

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, prevState.inputValue],
      inputValue: '',
    }));
  };

  render() {
    return (
      <div>
        <h1>To-Do List</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <button type="submit">Add Task</button>
        </form>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoList;

