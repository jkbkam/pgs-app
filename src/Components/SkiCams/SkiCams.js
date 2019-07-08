import React, { Component } from 'react';
import CamView from '../CamView/CamView';
import './SkiCams.css';

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
      places: [{}]
    };
  }

  componentWillMount() {

    fetch("https://makevoid-skicams.p.mashape.com/cams.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:40371",
        "X-Mashape-Key": "kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw"
      },
    })
      .then(handleResponse)
      .then(json => {
        const views = [
          json[32].cams[123].url,
          json[191].cams[539].url
        ];
        this.setState(prevState => ({
          places: [views, ...prevState.places]
        }))
      })

  }

  render() {
    if (this.state.places[0] === null) return null;
    return (
      <div className="ski-cams">
        <CamView src={this.state.places[0][0]} />
        <CamView src={this.state.places[0][1]} />
      </div>
    );
  }
}

export default SkiCams;
