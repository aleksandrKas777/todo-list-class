import React from 'react';
import {ButtonImportance} from './buttons/button-importance/button-importance';
import {ButtonActive} from './buttons/button-active/button-active';


export const TaskItem = ({id,importance, active, name, deleteTask, importanceTask,  activeTask}) => {
       const style = {
            fontWeight: (importance === false ? 'normal': 'bolder'),
            color: (active === false ? 'rgb(168, 168, 168)': 'black')
        };

        return (
            <li className='line'>
                <div className = 'tasks' style={style}> {name} </div>
                <div className='buttonLine'>
                    < ButtonImportance importance={importance} id={id} importanceTask={importanceTask}
                     activeTask={activeTask}/>
                    <ButtonActive active={active} id={id}  activeTask={activeTask}/>
                    <button onClick={() => deleteTask(id)}>удалить задачу</button>
                </div>
            </li>);
        
   
};

