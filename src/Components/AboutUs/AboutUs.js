import React, { Component } from 'react';
import image1 from '../../img/box-1.jpg';
import image2 from '../../img/box-2.jpg'
import image3 from '../../img/box-3.jpg'
import Feature from '../Feature/Feature';

class AboutUs extends Component {
  render() {
    const boxes = [
      { box: 1, src: image1 },
      { box: 2, src: image2 },
      { box: 3, src: image3 }
    ]
    return (
      <div className="about main-box">
        {
          boxes.map(({ box, src }) =>
            <Feature box={box} src={src} key={box} />
          )
        }
      </div>
    );
  }
}

export default AboutUs;
