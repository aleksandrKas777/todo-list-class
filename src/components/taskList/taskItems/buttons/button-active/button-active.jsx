import React, { Component } from 'react';

export const ButtonActive = ({id, active, activeTask}) =>{
    

        const buttonText = (active === false ?  'активировать задачу': 'завершить задачу');
        return (
     <button onClick={() => activeTask(id)}> {buttonText}</button>);

 
};