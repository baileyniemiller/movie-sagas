import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import Movies from '../Movies/Movies.js';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

class App extends Component {

  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/">
            <Movies />
          </Route>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
