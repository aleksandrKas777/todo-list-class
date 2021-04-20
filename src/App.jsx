import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {TaskList} from './components/taskList/task-list';


const taskList = [
  {
    id: 1,
    name: 'task1',
    importance: true,
    active: false
  },
  {
    id: 2,
    name: 'task2',
    importance: false,
    active: true
  },
  {
    id: 3,
    name: 'task3',
    importance: false,
    active: false
  },
  {
    id: 4,
    name: 'task4',
    importance: true,
    active: true
  },

];



class  App extends Component {
  
  render() {
    this.state = taskList;
    console.log(this.state);

    return (
    <div>
      <div className='panel'>
        <input type="text"/>
        <div>
          <button>все задачи</button>
          <button>активные задачи</button>
          <button>завершенные задачи</button> 
        </div>
      </div>
      <div>
        <TaskList taskList = {taskList} />
      </div>
    </div>
  );
  }
  
 
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
