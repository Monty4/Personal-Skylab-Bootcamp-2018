'use strict';

class IncrementAPP extends React.Component {

    constructor() {
        super()

        this.state = {
            num: 0
        }
    }

    increment = e => {
        e.preventDefault();

        keepInput = e => this.setState({ input: e.target.value })
        
        this.setState(prevState => { return {num:prevState.num +1} })
        
    }

    decrement = e => {
        e.preventDefault()
        this.setState(prevState => { return { num: prevState.num -1}

        })
    }

    // render() {
    //     return <form>
    //     <button onClick={this.decrement}>-</button>
    //     <p><h1>{this.state.num}</h1></p>
    //     <button onClick={this.increment}>+</button>
    // </form>
    // }

    render(){
        return <form>
            <input type="text" /><button onChange={this.increment}>+</button>
            <p><h1>{this.state.num}</h1></p>
            <input type="text" /><button onClick={this.decrement}>-</button>
            </form>
    }
}

ReactDOM.render(<IncrementAPP />,
document.getElementById('root')
)