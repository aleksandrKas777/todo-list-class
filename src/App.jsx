import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {TaskList} from './components/taskList/task-list';


class  App extends Component {
  state = {
    taskList : [
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
    
    ]
  }

 importanceTask = (id) => {
    const stateImportance = (prestate) => {
      const{taskList} = prestate;
      const newTaskList = taskList.map(item => {
        if (item.id === id) {
          item.importance = (item.importance === false? true : false);
        }
        return item;
      });
      return {
        taskList: newTaskList
      };
    };
    this.setState(stateImportance);
  }

  activeTask = (id) => {
    const stateActive = (prestate) => {
      const{taskList} = prestate;
      const newTaskList = taskList.map(item => {
        if (item.id === id) {
          item.active = (item.active === false? true : false);
        }
        return item;
      });
      return {
        taskList: newTaskList
      };
    };
    this.setState(stateActive);
  }

  deleteTask = (id) => {

    const stateDel = (preState) => {
      const {taskList} = preState;
      
      const newTaskList = taskList.filter(item => item.id !== id);

      return {
        taskList: newTaskList
      };
    };

    this.setState(stateDel);
  }
  

  
  render() {
    const {taskList} = this.state;
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
        <TaskList taskList = {taskList} deleteTask={this.deleteTask} 
        importanceTask={this.importanceTask} activeTask={this.activeTask}/>
      </div>
    </div>
  );
  }
  
 
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
