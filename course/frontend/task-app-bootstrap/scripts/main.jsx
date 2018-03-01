'use strict';

class TaskApp extends React.Component {

    constructor() {
        super()

        this.state = {
            tasks: [],
            done: false
        }

    }







    render() {

        return 
        return <form>
            <input type="text" placeholder="Número para operar" value={this.state.value} onChange={ this.toOperate } value1={ this.state.value } />&nbsp;
            <button onClick={this.increment}>+</button>&nbsp;
            <button onClick={this.decrement}>-</button>
            <p><h1>{this.state.num}</h1></p>
            
            </form>


    }
}



ReactDOM.render(<TaskApp />,
    document.getElementById('root')
)