import React, { Component } from 'react';

class Flag extends Component {


    render() {
        return (
            <div className="row">
            <div className="col">
                <center><img src={this.props.source} /></center>
            </div>
          </div>
        );
    }
    

}

export default Flag;
