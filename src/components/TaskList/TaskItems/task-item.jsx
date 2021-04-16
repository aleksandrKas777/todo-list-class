import React from 'react';
import {Buttons} from './ButtonImportance/button-importance';


export const TaskItem = ({item}) => {
    const style = {
        fontWeight: (item.importance === false ? 'normal': 'bolder')
    };

    
    return (
        <li className='line'>
            <div className = 'tasks' style={style} > {item.name} </div>
            <div className='buttonLine'>
                < Buttons item={item}/>
                <button>удалить задачу</button>
            </div>
        </li>);
};

