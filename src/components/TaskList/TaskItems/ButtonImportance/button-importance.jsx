<<<<<<< HEAD
import React, { Component } from 'react';

export class Buttons extends Component{
    

    render() {
        const buttonText = (this.props.importance === false ?  'отметить как важное': 'снять отметку как важное');
        return (
     <button> {buttonText}</button>);
    }
 
=======
import React, {Component} from 'react';

export class Buttons extends Component {

    render() {
        const buttonText = (item.importance === false ?  'отметить как важное': 'снять отметку как важное');
        return (
            <button> {buttonText}</button>
            );
    }
>>>>>>> 921766fe70b2b8e4ee1bf2e14b74a982ab65e617
};