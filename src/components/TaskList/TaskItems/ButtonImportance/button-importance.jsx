import React from 'react';

export const Buttons = ({item}) => {
    const buttonText = (item.importance === false ?  'отметить как важное': 'снять отметку как важное');

 return (
     <button> {buttonText}</button>);
};