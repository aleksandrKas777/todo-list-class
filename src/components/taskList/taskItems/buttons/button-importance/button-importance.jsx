import React from 'react';

export const ButtonImportance = ({id, importance, importanceTask}) => {
        const buttonText = (importance === false ?  'отметить как важное': 'снять отметку как важное');
        return (
     <button onClick={() => importanceTask(id)}> {buttonText}</button>);
    
 
};