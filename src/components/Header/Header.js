import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Movies</h1>
        <Link exact to="/"><button>Home</button></Link>
      </header>
    )
  }
}

export default Header;