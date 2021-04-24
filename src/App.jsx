import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {TaskList} from './components/taskList/TaskList';
import {ButtonDispList} from './components/taskList/taskItems/buttons/button-disp-list/ButtonDispList';
import {Form} from './components/form/form';


const filteredTaskList = (taskList, inputFilterValue) => {
  if(inputFilterValue === '') {
    return taskList;
  } else {
    return taskList.filter(item => item.name.includes(inputFilterValue));
  }
};

class  App extends Component {
  state = {
    taskList : [
      {
        id: 1,
        name: 'learn js',
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
        name: 'drink coffee',
        importance: false,
        active: false
      },
      {
        id: 4,
        name: 'learn react',
        importance: true,
        active: true
      },

    ],

    displayedList : 'all',
    inputFilterValue: ''
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


  inputHandler = (e) => {
    const {value} = e.target;

    this.setState({inputFilterValue: value});
  }


  addNewTask = (inputNewTask) => {
    const stateAddTask = (prestate) => {
      const{taskList} = prestate;
      const arrId = taskList.map(item => item.id);
      const newId = Math.max.apply(null, arrId) + 1;

      const newTask = {
        id: newId,
        name: inputNewTask,
        importance: true,
        active: true
      };

      taskList.push(newTask);
      return {
        taskList
      };
    };


    this.setState(stateAddTask);

  };

  

  
  render() {
    const {taskList, displayedList, inputFilterValue} = this.state;
    let newTaskList = null;

    if(inputFilterValue !== '') {
      newTaskList = filteredTaskList(taskList, inputFilterValue);
    } else if(displayedList === 'completed'){
      newTaskList = taskList.filter(item => item.active === false);
    }else if(displayedList === 'active'){
      newTaskList = taskList.filter(item => item.active === true);
    } else{
      newTaskList = taskList;
    }

    return (
    <div>
      <div className='panel'>
        <div>
          <Form addNewTask={this.addNewTask}/>
        </div>
        <input onChange={this.inputHandler} value={inputFilterValue} type="text"/>
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
