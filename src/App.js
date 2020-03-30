import React, { Component } from 'react';
import Contacts from './contacts';
import CasesCountry from './casescountry';
import Select from 'react-select';

const options = [
  { value: 'CHL', label: 'Chile' },
  { value: 'ARG', label: 'Argentina' },
]

class App extends Component {

  state = {
    selectedOption: "CHL"
  }

  componentDidMount() {
    console.log("componentDidMount")
    fetch('https://corona.lmao.ninja/all')
    .then(res => res.json())
    .then(
      (data) => {
        this.setState({sumary: data})
      }
    )
    .catch(console.log)
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
    console.log(`Option selected:`, this.state.selectedOption.value);
    this.render()
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption.value);
  }

  render() {
    console.log("render")
    const { selectedOption } = this.state;
    return (
      <div>
      <CasesCountry country={selectedOption} title="Chile"/>
      </div>
    );
  }
}

export default App;
