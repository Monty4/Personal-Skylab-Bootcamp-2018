"use srtict"

const helloworld  = 'hello world'
ReactDOM.Render(
    React.CreateElement('main',null,
        React.CreateElement('section',null,
            React.CreateElement('h1',null,'Hello, World')
            )
        ), document.getElementById('root'))
// Esto lo podemos hacer con babel
// descargar babel
//http://babeljs.io/

// ReactDOM.reender(<main><section><h1>Hello</h1></section></main>)
//guardar como HTMLMainElement.jsx
//<script src="main.jsx" type="text/babel">
// hay que montar un servidor para que funcione (NODE)

const hello = 'hello';
<h1>{hello}</h1>


///////// CON BABEL ///////////////

"use srtict"

const helloWorld  = 'hello, World!'

function saludation(){
    return helloWorld
}

function salute(){
    alert(helloWorld)
}

ReactDOM.Render(
    <main>
        <section>
            {/* <h1>{helloworld}</h1> */}
            {/* saludation() */}
            <hr />
            <button className="" onClick={salute}>salute</button>
        </section>
    </main>,
    document.getElementById('root')


    
)


////////////////// CLCULADORA ///////////////
'use strict'

let a,b,res // Son los estados

function calculate(e) {
    e.preventDefault()

    res = a + b

    console.log('calculate', res)

    render()
}

function keepA(e){
    a =parseFloat(e.target.value)
    console.log(a)
}

function keepB(e){
    b =parseFloat(e.target.value)
    console.log(b)
}

function Render(){
    

    ReactDOM.Render(
        <main>
            <section>
                <form onSubmit={calculate}>
                    <input type="text" onChange={keepA}/>
                    +
                    <input type="text" onChange={keepB}/>
                    <button type="submit">=</button>
                    <input type="text" disabled value={res}/>
                </form>
            </section>
        </main>,
        document.getElementById('root')
    )
}
render()


/////////////////////////////////////////////
//////////////////////////////////
//////////////////
'use strict'

// Creamos componentes

function hellWorld(){
    return <h1>Hello, World!</h1>
}

function Hello(props){
    return <h1>Hello, {props.name}!</h1>
}


calculate = (e) => {
    e.preventDefault()

    this.setState(){
        res: this.state.a + this.state.b
    }

    console.log('calculate', res)

    
}


keepA = (e) => {
    
    this.setState({a: parseFloat(e.target.value)})
}

keepB = (e) => {
    
    this.setState({a: parseFloat(e.target.value)})
}

// crear componente con estado
class Calc extends React.Component{
    constructor(){
        super() // porque Calc extiende de ......Sólo si el framework nos obliga a ello
        // estado inicial
        this.state = {
            a: 0,
            b: 0,
            res: 0
        }
    }



    

    

    render(){
        <form onSubmit={calculate}>
            <input type="text" onChange={this.keepA}/>
            +
            <input type="text" onChange={this.contextkeepB}/>
            <button type="submit">=</button>
            <input type="text" disabled value={this.state.res}/>
        </form>
    }
}

function Render(){
    

    ReactDOM.Render(
        <main>
            <section>
                <helloWorld />
                <Hello name="John"/>
            </section>
        </main>,
        document.getElementById('root')
    )
}
render()


//////
