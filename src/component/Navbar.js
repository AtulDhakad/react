import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Navbar extends Component {
  render () {
    return(<div><nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container">
      <Link to={'/'} className="navbar-brand">Start Bootstrap</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
       </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
          <Link to={'/'} className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
          <Link to={'/about'} className="nav-link">About</Link>
          </li>
          <li className="nav-item">
          <Link to={'/services'} className="nav-link">Services</Link>
          </li>
          <li className="nav-item">
          <Link to={'/contactus'} className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</div>);

  }
}

export default Navbar;
