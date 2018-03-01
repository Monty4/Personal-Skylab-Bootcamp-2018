import React, { Component } from 'react';
import './App.css';
import TaskApp from './components/TaskApp'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskApp />
        <TaskInput />
        <TaskList />
        
      </div>
    );
  }
}

export default App;
