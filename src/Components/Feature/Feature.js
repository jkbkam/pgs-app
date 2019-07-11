import React, { Component } from 'react';

class Feature extends Component {
  render() {
    return (
      <div className="about-box">
        <img src={this.props.src} alt="pgs-about" title="pgs-about"/>
        <h1>Lorem ipsum</h1>
        <p>Etiam ullamcorper. Suspendisse a pellentesque dui, non felis maecenas.</p>
      </div>
    );
  }
}

export default Feature;
