import React from 'react'
import { throwStatement } from '@babel/types';

class StatelesComponent2 extends React.Component{

constructor(args){
    super(args)
    this.state = {
        counter: 0
    }
}

sumar(e){
    this.setState(
        {
            counter: this.state.counter + 1
        }
    )
}

restar(e){
    this.setState(
        {
            counter: this.state.counter - 1
        }
    )
}

render(){
    return(
        <div>
        <span>Contador {this.state.counter}</span>
        <div>
            <button onClick={this.sumar.bind(this)}>+</button>
            <button onClick={this.restar.bind(this)}>-</button>
        </div>
        </div>
    )
}

}

export default StatelesComponent2