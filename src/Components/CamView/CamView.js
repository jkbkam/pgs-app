import React, { Component } from 'react';

class CamView extends Component {

  render() {
    return (
      <div className="view">
            <img src={this.props.src} alt="pgs-live-cam" title="pgs-live-cam" />
      </div>
    );
  }
}

export default CamView;
