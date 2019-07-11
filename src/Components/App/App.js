import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from '../NavBar/NavBar'
import AboutUs from '../AboutUs/AboutUs';
import SkiCams from '../SkiCams/SkiCams';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-page">
          <NavBar />
          <section>
            <Route exact={true} path="/" component={AboutUs} />
            <Route path="/ski-cams" component={SkiCams} />
            <Route path="/contact" component={Contact} />
          </section>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
