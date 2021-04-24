import React, {Component} from 'react';


export class Form extends Component {
    state = {
        inputNewTask: ''
    }
    inputNewTask =(e) => {
        const {value} = e.target;
        this.setState({inputNewTask: value});

    }
    render() {
        const {inputNewTask} = this.state;
        const disabledButton = (inputNewTask === '');

        return (
            <div>
                <input value={inputNewTask} onChange={this.inputNewTask}/>
                <button disabled={disabledButton} onClick={() => this.props.addNewTask(inputNewTask) }>
                    добавить запись</button>
            </div>
        );
    }
}