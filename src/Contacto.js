import React from 'react'
import { throwStatement } from '@babel/types';
import Item from './Item'

class Contacto extends React.Component{

constructor(args){
    super(args)
    this.state = {
        users: [
    ]
    }
}

add(e){
    const nameInput = document.getElementById('name')
    const telefonoInput = document.getElementById('telefono')

    let newUser = {
        id: new Date().getTime(),
        name: nameInput.value,
        telefono: telefonoInput.value
    }

    let users = this.state.users
    users.unshift(newUser)

    this.setState({
        users: users
    })
}

delete(id){
    console.log("delete =>");

    let userIndex = this.state.users.map(x => {return x.id}).indexOf(id)

    let users = this.state.users

    users.splice(userIndex, 1)

    this.setState({
        users: users
    })

}



render(){
    return(
        <div>
        <label>Nombre</label><br/>
        <input id="name" type="text" />
        <br/>

        <label>Telefono</label><br/>
        <input id="telefono" type="text" />
        <br/>
        <button type="submit" className="btn btn-primary" onClick={this.add.bind(this)}>Agregar</button>
        <br/>
        <ul>
            {
                this.state.users.map(user =>
                    {
                        return <Item
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        telefono={user.telefono}
                        deleteOp={this.delete.bind(this)}
                        />
                    })
            }
        </ul>
        
        </div>
    )
}

}

export default Contacto