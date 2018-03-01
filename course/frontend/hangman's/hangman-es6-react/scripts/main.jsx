'use strict';

class HangmanApp extends React.Component {
    constructor() {
        super()

        this.state = {
            wordLenght: 0,
            input: ''
        }
    }



    render(){
        return <div>hola</div>
    }
}


ReactDOM.render(<HangmanApp />,
    document.getElementById('root')
    )