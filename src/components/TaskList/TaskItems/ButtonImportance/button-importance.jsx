import React, {Component} from 'react';

export class Buttons extends Component {

    render() {
        const buttonText = (item.importance === false ?  'отметить как важное': 'снять отметку как важное');
        return (
            <button> {buttonText}</button>
            );
    }
};