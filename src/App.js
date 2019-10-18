import React, { Component } from 'react';
import { Router } from '@reach/router'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './Navigation';
import Home from './Home';
import Flights from './Flights';
import CountriesVisited from './CountriesVisited';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Router>
          <Home path="/" />
          <Flights path="/flights" />
          <CountriesVisited path="/countries-visited" />
        </Router>

      </div>
    );
  }
}

export default App;
