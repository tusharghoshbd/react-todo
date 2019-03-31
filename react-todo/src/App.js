import React, { Component } from 'react';
import CreateTask from './components/createTask'
import TaskList from './components/taskList';
import Filters from './components/filters'

class App extends Component {

  render() {
    return (
        <div >
            <h1> To do List </h1>
            <hr/>
            <CreateTask />            
            <TaskList />
            <Filters/>

        </div>
    );
  }
}

export default App;
