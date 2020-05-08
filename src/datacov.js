import React, { Component } from 'react';

class DataCov extends Component {


    render() {
        return (
            <div className="row">
          <div className="col">
          <div className={this.props.color} role="alert">
              <center>{this.props.title}</center>
              </div>
          </div>
          <div className="col">
          <div className={this.props.color} role="alert">
              <center>{new Intl.NumberFormat().format(this.props.info)}</center>
              </div>
          </div>
        </div>
        );
    }
    

}

export default DataCov;
