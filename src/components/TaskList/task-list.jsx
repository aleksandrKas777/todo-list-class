import React, { Component } from 'react';
import {TaskItem} from './taskItems/task-item';

export class TaskList extends Component {
    
    render() {
        return (
            
            <ul> список задач
                {this.props.taskList.map((item) => <TaskItem key={item.id} item={item}/> )}
            </ul>

        );
    }
        
};