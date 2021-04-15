import React from 'react';
import {TaskItem} from './TaskItems/task-item';

export const Tasks = ({taskList}) => {
        return (
            <ul>
                {taskList.map((item) => <TaskItem key={item.id} item={item}/> )}
            </ul>
        );
};