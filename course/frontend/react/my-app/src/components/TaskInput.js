import React, { Component } from 'react';


class TaskInput extends Component {
    constructor(){
        super()


    }


    render() {
        return <form>
            <input type="text" className="round-blue-input" placeholder="Input task" />
            &nbsp;
            <button type="submit" className="round-red-button">Add</button>
            </form>
    }
}

export default TaskInput