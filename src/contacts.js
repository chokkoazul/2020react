import React from 'react'

    const Contacts = ({ sumary }) => {
      return (
<div className="container">
  <div className="row">
    <div className="col">
        <div className="alert alert-primary" role="alert">
        <center>Global</center>
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
        <center>{new Intl.NumberFormat().format(sumary.cases)}</center>
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
        <center>{new Intl.NumberFormat().format(sumary.deaths)}</center>
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
        <center>{new Intl.NumberFormat().format(sumary.recovered)}</center>
        </div>
    </div>
  </div>
</div>
      )
    };

    export default Contacts