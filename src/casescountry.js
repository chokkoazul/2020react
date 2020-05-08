import React, { Component } from 'react';
import Select from 'react-select';
import Flag from './flag';
import DataCov from './datacov';

const options = [
  { value: 'all', label: 'Global' }
]

class CasesCountry extends Component {

  state = {
    sumary: {},
    selectedOption: "CHL",
    title: "Chile",
  }

  componentDidMount() {
    let api = this.props.country == "all" ? 'https://corona.lmao.ninja/v2/all' : 'https://corona.lmao.ninja/v2/countries/'+this.props.country 
    console.log("country:",this.props.country)
    fetch(api)
    .then(res => res.json())
    .then(
      (data) => {
        this.setState({sumary: data})
      }
    )
    .catch(console.log)

    fetch('https://corona.lmao.ninja/v2/countries?sort=country')
    .then(res => res.json())
    .then(
      (data) => {
        data.filter(function(country){
            if((country.country!="Diamond Princess" && country.country!="MS Zaandam")){
            options.push({value: country.countryInfo.iso3, label: country.country})
            }
        })
      }
    )
    .catch(console.log)


  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log("handleChangeselectedOption...",selectedOption.value)
    
    let api = selectedOption.value == "all" ? 'https://corona.lmao.ninja/v2/all' : 'https://corona.lmao.ninja/v2/countries/'+selectedOption.value 
    
    fetch(api)
    .then(res => res.json())
    .then(
      (data) => {
        this.setState({sumary: data, title: selectedOption.label})
        console.log("data ajajaja...",this.state.sumary)
      }
    )
    .catch(console.log)  
}

  render() {
    const { selectedOption } = this.state.selectedOption;
    let flag;

   if (this.state.sumary.countryInfo == undefined){
        flag = "https://cdnb.20m.es/ciencias-mixtas/files/2015/05/Flag_20x30-300x200.jpg"
    }
    else{
        flag = this.state.sumary.countryInfo.flag;
    }
    if(Object.entries(this.state.sumary).length == 0){
        return false
    }
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
        <Flag source={flag}/>
        <DataCov title="Casos" info={this.state.sumary.cases} color="alert alert-secondary" />
        <DataCov title="Muertes" info={this.state.sumary.deaths} color="alert alert-danger" />
        <DataCov title="Recuperados" info={this.state.sumary.recovered} color="alert alert-success"/>
        </div>
    );
  }
}

export default CasesCountry;
