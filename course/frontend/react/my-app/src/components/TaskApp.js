import React, { Component } from 'react';

class TaskApp extends Component {
    constructor() {
        super()

        this.state = {
            input: '',
            tasks: []
        }
    }

    keepInput = e => this.setState({ input: e.target.value })

    addTask = () => {


        this.setState(prevState => {
            return {
                // tasks: prevState.tasks.concat(this.state.input)
                tasks: [...prevState.tasks, this.state.input],
                input: ''
            }
        })
    }

    removeTask = index => {
        this.setState(prevState => {
            return {
                tasks: prevState.tasks.filter((task, _index) => {
                    return index !== _index
                })
            }
        })
    }

    
}

export default TaskApp
