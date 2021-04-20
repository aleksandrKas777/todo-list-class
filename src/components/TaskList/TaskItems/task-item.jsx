import React, { Component } from 'react';
import {Buttons} from './buttonImportance/button-importance';


export class TaskItem extends Component {
    

    render() {
        const style = {
            fontWeight: (this.props.item.importance === false ? 'normal': 'bolder')
        };
        return (
            <li className='line'>
                <div className = 'tasks' style={style} > {this.props.item.name} </div>
                <div className='buttonLine'>
                    < Buttons importance={this.props.item.importance}/>
                    <button>удалить задачу</button>
                </div>
            </li>);
        }
   
};

