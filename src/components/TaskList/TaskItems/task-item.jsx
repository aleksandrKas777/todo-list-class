import React from 'react';


export const TaskItem = ({item}) => {
    const buttonText = (item.importance === false ?  'отметить как важное': 'снять отметку как важное');
    return (
        <li className='line'>
            <div> {item.name} </div>
            <div className='buttonLine'>
                <button> {buttonText} </button>
                <button>удалить</button>
            </div>
        </li>);
};