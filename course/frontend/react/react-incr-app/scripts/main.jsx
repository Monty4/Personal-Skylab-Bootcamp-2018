'use strict';

class IncrementAPP extends React.Component {

    constructor() {
        super()

        this.state = {
            num: 0,
            value: ''
        }
    }

    toOperate = e => this.setState({ value: e.target.value })

    increment = e => {
        e.preventDefault();

        this.setState(prevState => {

            this.setState( { num: parseFloat(prevState.num) + parseFloat(this.state.value)  } )
            this.setState( { value: '' } )
            }
        )
    }

    decrement = e => {
        e.preventDefault()
        
        this.setState(prevState => {

            this.setState( { num: parseFloat(prevState.num) - parseFloat(this.state.value)  } )
            this.setState( { value: '' } )
            }
        )
    }


    ////////////////////// BOTONES DE + Y - //////////////////////////////////////
    // render() {
    //     return <form>
    //     <button onClick={this.decrement}>-</button>
    //     <p><h1>{this.state.num}</h1></p>
    //     <button onClick={this.increment}>+</button>
    // </form>
    // }

    //////////////////////// CAMPO DE TEXTO CON VALOR //////////////////////////////
     
    render(){
        return <form>
            <input type="text" placeholder="Número para operar" value={this.state.value} onChange={ this.toOperate } value1={ this.state.value } />&nbsp;
            <button onClick={this.increment}>+</button>&nbsp;
            <button onClick={this.decrement}>-</button>
            <p><h1>{this.state.num}</h1></p>
            
            </form>
    }
}

ReactDOM.render(<IncrementAPP />,
document.getElementById('root')
)