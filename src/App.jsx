import React from 'react';
import ReactDOM from 'react-dom';
import {Tasks} from './components/TaskList/task-list';

class  App extends React.Component {
  
  render(){
      const taskList = [
    {
      id: 1,
      name: 'task1',
      importance: true
    },
    {
      id: 2,
      name: 'task2',
      importance: false
    },
    {
      id: 3,
      name: 'task3',
      importance: false
    },
    {
      id: 4,
      name: 'task4',
      importance: true
    },

    ];
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
        <Tasks taskList = {taskList} />
      </div>
    </div>
  );
  }
  
 
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
