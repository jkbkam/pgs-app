import React, { Component } from 'react';
import moment from 'moment'
import CamView from '../CamView/CamView';

import data from './skicam.json';

function handleResponse(response) {
  if (response.status === 404) {
    return Promise.reject(response);
  }
  return response.json();
}

class SkiCams extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dateFormatted: moment().format('DD-MM-YYYY'),
      places: [{}]
    };
  }

  showCam(place) {
    const objVal = Object.values(data)
    const onePlace = objVal.filter(function (value) {
      return value.name === place
    }).map(function (value) {
      let arr = {}
      return arr = { [value.name]: value.cams }
    }).reduce(
      (plc, cam) => Object.assign(plc, cam),
      {}
    )
    var objValCam = Object.values(onePlace[place])
    var objCams = objValCam.map(function (value) {
      return value.url
    })
    const views = objCams

    return views
  }

  componentWillMount() {
    fetch("https://makevoid-skicams.p.mashape.com/cams.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Mashape-Key": "kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw"
      },
    })
      .then(handleResponse)
      .then(json => {
        //API cały wieczór rzuca 503 i nie mam jak sprawdzać efektów dlatego zaimportowałem jsona lokalnie. 
      })

    var views1 = this.showCam("Passo dello Stelvio")
    var views2 = this.showCam("Bielmonte")
    this.setState(prevState => ({
      places: [views1, views2, ...prevState]
    }))
  }

  render() {
    const NewDate = this.state.dateFormatted;
    const place1 = this.state.places[0];
    const place2 = this.state.places[1];
  
    function randomCam(value) {
      var min = 0;
      var max = value.length
      return Math.floor(Math.random() * (max - min) + min)
    }

    return (
      <div className="ski-cams main-box">
        <div className="ski-cams-box">
          <p>{NewDate}</p>
          <h1>Passo dello Stelvio</h1>
          <CamView src={place1[randomCam(place1)]} /> 
          <CamView src={place1[randomCam(place1)]} />
        </div>
        <div className="ski-cams-box">
          <p>{NewDate}</p>
          <h1>Bielmonte</h1>
          <CamView src={place2[randomCam(place2)]} />
          <CamView src={place2[randomCam(place2)]} />
        </div>
      </div>
    );
  }
}

export default SkiCams;
