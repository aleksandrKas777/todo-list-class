import React, {Component} from 'react';
import {TaskItem} from './TaskItems/task-item';

export class Tasks extends Component {


    render() {
        return (
            <ul> список задач
                {taskList.map((item) => <TaskItem key={item.id} item={item}/> )}
            </ul>
        );
    }
            
};