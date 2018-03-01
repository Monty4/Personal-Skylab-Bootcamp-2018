import React, { Component } from 'react';

class TaskList extends Component{
    constructor() {
        super()

    }

    render() {
        // return <ul>
        // {props.tasks.map((task, index) => <li>{task} &nbsp; <a onClick={(e) => {
        //     e.preventDefault()

        //     props.onRemoveTask(index)
        // }}>🗑</a></li>)}
        // </ul>
        
        return <ul>
            <li>LI &nbsp; <a >🗑</a></li>
        </ul>

    }


}

export default TaskList