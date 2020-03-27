import React, { Component } from 'react';
import Contacts from './contacts';

class App extends Component {

  state = {
    sumary: {}
  }

  componentDidMount() {
    fetch('https://corona.lmao.ninja/all')
    .then(res => res.json())
    .then(
      (data) => {
        this.setState({sumary: data})
      }
    )
    .catch(console.log)
  }

  render() {
    return (
      <Contacts sumary={this.state.sumary} />
    );
  }
}

export default App;
