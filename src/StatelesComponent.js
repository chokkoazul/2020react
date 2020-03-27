import React from 'react'

class StatelesComponent extends React.Component{

constructor(args){
    super(args)
    this.state = {}
}

evento(e){
    alert(e.target.value)
  }
  

render(){
let calculo = 10;

let style = null;

if(calculo == 10){
    style = {color: 'red'}
}else{
    style = {color: 'green'}
}

    return(
        <div>
        <h2>hola mundo desde StatelesComponent</h2>
        <input
        onClick={this.evento.bind(this)}
        type="txt" value="hola mundo"
        className={calculo ==  10 ? 'red' : 'green'}
        style={style}
        />
        

        </div>
    )
}

}

export default StatelesComponent