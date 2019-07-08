import React, { Component } from 'react';
import moment from 'moment'
import './CamView.css';

class CamView extends Component {

  state = {
    dateFormatted: moment().format('DD-MM-YYYY')
  }
  render() {
    const NewDate = this.state.dateFormatted;
    return (
      <div className="view">
        <p>{NewDate}</p>
        <img src={this.props.src} alt="pgs-live-cam" title="pgs-live-cam" />
      </div>
    );
  }
}

export default CamView;
