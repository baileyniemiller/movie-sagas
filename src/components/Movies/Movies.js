import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Movies extends Component {
  //on component mount dispatch to FETCH_MOVIES
  componentDidMount = () => {
    // use component did mount to dispatch an action to request the movies from the API
    this.props.dispatch({ type: "FETCH_MOVIES" });
  };

  // getDetails = (index) => {
  //   this.props.dispatch({ type: "FETCH_DETAILS"});
  // }

  render() {
    return (
      <Route path="/">
        <div>
          <h1>Movies</h1>
          {/* Mapping through movies, which we recieved from the
            movies reducer as props, to grab each poster and dispay it*/}
          {this.props.movies.map((movie, index) => {
            return <img key={index} src={movie.poster} alt={movie.title} />
                    // onClick={(index) => {this.getDetails}}
          })}
        </div>
      </Route>
    );
  }
}

// bringing in the movies array that's stored in the
// movies reducer to use as props
const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps)(Movies);
