import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Header.css';

// Header component

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="title">InfoMovie</h1>
        <Link exact to="/"><button className="homeButton">Home</button></Link>
      </header>
    )
  }
}

export default Header;