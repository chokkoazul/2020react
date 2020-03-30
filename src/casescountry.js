import React, { Component } from 'react';
import Contacts from './contacts';
import Select from 'react-select';

const options = [
  { value: 'all', label: 'Global' }
]

class CasesCountry extends Component {

  state = {
    sumary: {},
    selectedOption: "CHL",
    title: "Chile"
  }

  componentDidMount() {
    let api = this.props.country == "all" ? 'https://corona.lmao.ninja/all' : 'https://corona.lmao.ninja/countries/'+this.props.country 
    console.log("country:",this.props.country)
    fetch(api)
    .then(res => res.json())
    .then(
      (data) => {
        this.setState({sumary: data})
      }
    )
    .catch(console.log)

    fetch('https://corona.lmao.ninja/countries?sort=country')
    .then(res => res.json())
    .then(
      (data) => {
        data.filter(function(country){
            if(country.countryInfo.country!=undefined || (country.country!="Diamond Princess" && country.country!="MS Zaandam")){
            options.push({value: country.countryInfo.iso3, label: country.countryInfo.country})
            }
        })
      }
    )
    .catch(console.log)

  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log("handleChangeselectedOption...",selectedOption.value)
    
    let api = selectedOption.value == "all" ? 'https://corona.lmao.ninja/all' : 'https://corona.lmao.ninja/countries/'+selectedOption.value 
    
    fetch(api)
    .then(res => res.json())
    .then(
      (data) => {
        this.setState({sumary: data, title: selectedOption.label})
      }
    )
    .catch(console.log)  
}

  render() {
    const { selectedOption } = this.state.selectedOption;
    
    return (
        <div className="container">
        <div className="row">
          <div className="col">
              <div className="alert alert-warning" role="alert">
              <center>Casos Covid-19</center>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        defaultValue={{label:"Chile", value:"CHL"}}
      /></div></div><br></br>
        <div className="row">
          <div className="col">
              <div className="alert alert-primary" role="alert">
              <center>{this.state.title}</center>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <div className="alert alert-secondary" role="alert">
              <center>Casos</center>
              </div>
          </div>
          <div className="col">
          <div className="alert alert-secondary" role="alert">
              <center>{new Intl.NumberFormat().format(this.state.sumary.cases)}</center>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <div className="alert alert-danger" role="alert">
              <center>Muertes</center>
              </div>
          </div>
          <div className="col">
          <div className="alert alert-danger" role="alert">
              <center>{new Intl.NumberFormat().format(this.state.sumary.deaths)}</center>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <div className="alert alert-success" role="alert">
              <center>Recuperados</center>
              </div>
          </div>
          <div className="col">
          <div className="alert alert-success" role="alert">
              <center>{new Intl.NumberFormat().format(this.state.sumary.recovered)}</center>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CasesCountry;
