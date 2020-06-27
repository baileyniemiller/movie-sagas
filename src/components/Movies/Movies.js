import React, { Component } from "react";
import { connect } from "react-redux";

class Movies extends Component {

  //on component mount dispatch to FETCH_MOVIES
  componentDidMount = () => {
    // use component did mount to dispatch an action to request the movies from the API
    this.props.dispatch({ type: "FETCH_MOVIES" });
  };

  render() {
    return (
      <div>
        {this.props.movies.map((movie) => {
          return(
          <img src={movie.poster} />
          );
        })}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps)(Movies);
