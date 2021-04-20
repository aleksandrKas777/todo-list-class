<<<<<<< HEAD
import React, { Component } from 'react';
import {Buttons} from './buttonImportance/Button-importance';
=======
import React, {Component} from 'react';
import {Buttons} from './ButtonImportance/button-importance';
>>>>>>> 921766fe70b2b8e4ee1bf2e14b74a982ab65e617


export class TaskItem extends Component {
    

<<<<<<< HEAD
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
=======
    render(){
        const style = {
                fontWeight: (item.importance === false ? 'normal': 'bolder')};

        return (
            <li className='line'>
                <div className = 'tasks' style={style} > {item.name} </div>
                <div className='buttonLine'>
                    < Buttons item={item}/>
                    <button>удалить задачу</button>
                </div>
            </li>);
    }
>>>>>>> 921766fe70b2b8e4ee1bf2e14b74a982ab65e617
   
};

