import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {TaskList} from './components/taskList/task-list';
import {ButtonDispList} from './components/taskList/taskItems/buttons/button-disp-list/button-disp-list';


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
    
    ],

    displayedList : 'active'
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


  displayList = (key) => {
    const stateDisp = (preState) => {
      const{taskList} = preState;
  
    return {
      taskList: taskList,
      displayedList: key
      };
    };
 
    this.setState(stateDisp);
  }
  

  
  render() {
    const {taskList, displayedList} = this.state;
    let newTaskList = null;
    if(displayedList === 'completed'){
      newTaskList = taskList.filter(item => item.active === false);
    }else if(displayedList === 'active'){
      newTaskList = taskList.filter(item => item.active === true);
    } else{
      newTaskList = taskList;
    }
    console.log(newTaskList);
    
    return (
    <div>
      <div className='panel'>
        <input type="text"/>
        <div>
          <ButtonDispList displayList={this.displayList}/>
        </div>
      </div>
      <div>
        <TaskList taskList = {newTaskList} deleteTask={this.deleteTask} 
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
