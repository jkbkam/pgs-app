import React, { Component } from 'react';

import './Feature.css';

class Feature extends Component {
  render() {
//"image"+this.props.box

    return (
      <div className={`box-${this.props.box}`}>
        <img src={this.props.src} alt="pgs-about" title="pgs-about"/>
        <h1>Lorem Ipsum</h1>
        <p>Etiam ullamcorper. Suspendisse a pellentesque dui, non felis maecenas.</p>
      </div>
    );
  }
}

export default Feature;
