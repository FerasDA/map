import React, { Component } from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa'
import { Link } from '@reach/router';

class Navigation extends Component {
  render() {
    return (
      <span>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            <FaMapMarkedAlt className="mr-1" />
            Cool Maps</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
              <Link className="nav-item nav-link" to="flights">Flights</Link>
              <Link className="nav-item nav-link" to="countries-visited">Countries Visited</Link>
            </div>
          </div>
        </nav>
      </span>
    )
  }
}

export default Navigation;