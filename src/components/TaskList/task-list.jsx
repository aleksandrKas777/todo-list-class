<<<<<<< HEAD
import React, { Component } from 'react';
import {TaskItem} from './taskItems/Task-item';

export class TaskList extends Component {
    
=======
import React, {Component} from 'react';
import {TaskItem} from './TaskItems/task-item';

export class Tasks extends Component {


>>>>>>> 921766fe70b2b8e4ee1bf2e14b74a982ab65e617
    render() {
        return (
            
            <ul> список задач
                {this.props.taskList.map((item) => <TaskItem key={item.id} item={item}/> )}
            </ul>

        );
    }
<<<<<<< HEAD
        
=======
            
>>>>>>> 921766fe70b2b8e4ee1bf2e14b74a982ab65e617
};