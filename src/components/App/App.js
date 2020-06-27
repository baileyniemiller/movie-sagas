import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import Movies from '../Movies/Movies.js';

class App extends Component {

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies</h1>
        <Movies />
      </div>
    );
  }
}

export default connect()(App);
