import React from 'react'
import PropTypes from 'prop-types'

class Item extends React.Component {
    
    
    render(){
    return (
        <li>
            {this.props.id} {this.props.name} - ({this.props.telefono}) 
            <button onClick={() => this.props.deleteOp(this.props.id)}>X</button>
        </li>
    )
    }
}

export default Item