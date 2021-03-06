import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Link, withRouter, Redirect } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import GridList from "@material-ui/core/GridList";
import Grid from "@material-ui/core/Grid";
import GridListTile from "@material-ui/core/GridListTile";
import './MovieList.css';


class MovieList extends Component {
  state= {
    redirect: false
  }
  // on component mount dispatch to FETCH_MOVIES
  componentDidMount = () => {
    // use component did mount to dispatch an action to request the movies from the API
    this.props.dispatch({ type: "FETCH_MOVIES" });
  };

  // on click of a movie poster, dispatch to FETCH_DETAILS
  // with the payload being that movie id so we know which
  // one was clicked!
  getDetails = (id) => {
      this.props.dispatch({ type: "FETCH_DETAILS", payload: id });
      this.setState({redirect: true}) // changing redirect to true
  };

  // when the movie poster is clicked, go to /details
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to = "/details" />
    }
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        {/* Mapping through movies, which we recieved from the
            movies reducer as props, to grab each poster and dispay it*/}
            <h1 className="homeTitle">Click on a movie to learn more!</h1>
          <div clasName="paperDiv">
            <Grid container spacing={6} className="grid">
              {this.props.movies.map((movie) => {
                return (
                  <Grid item lg={3} sm={6} xs={12}>
                    <Paper elevation={2} className="paperElement">
                      <img className="moviePoster"src={movie.poster} onClick={() => this.getDetails(movie.id) }/>
                    </Paper>
                </Grid>
                );
              })}
            </Grid>
          </div>
      </div>
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

export default connect(mapStateToProps)(MovieList);