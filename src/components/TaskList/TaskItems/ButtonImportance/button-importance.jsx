import React, { Component } from 'react';

export class Buttons extends Component{
    

    render() {
        const buttonText = (this.props.importance === false ?  'отметить как важное': 'снять отметку как важное');
        return (
     <button> {buttonText}</button>);
    }
 
};