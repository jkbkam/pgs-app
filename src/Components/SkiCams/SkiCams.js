import React, { Component } from 'react';
import moment from 'moment'
import CamView from '../CamView/CamView';

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
        const views = [
          json[191].cams[547].url,
          json[191].cams[548].url,
          json[32].cams[124].url,
          json[32].cams[126].url
        ];
        this.setState(prevState => ({
          places: [views, ...prevState.places]
        }))
      })
  }

  render() {
    const NewDate = this.state.dateFormatted;

    if (this.state.places[0] === null) return null;
    return (
      <div className="ski-cams main-box">
        <div className="ski-cams-box">
          <p>{NewDate}</p>
          <h1>Passo dello Stelvio</h1>
          <CamView src={this.state.places[0][0]} />
          <CamView src={this.state.places[0][1]} />
        </div>
        <div className="ski-cams-box">
          <p>{NewDate}</p>
          <h1>Biel monte</h1>
          <CamView src={this.state.places[0][2]} />
          <CamView src={this.state.places[0][3]} />
        </div>
      </div>
    );
  }
}

export default SkiCams;
