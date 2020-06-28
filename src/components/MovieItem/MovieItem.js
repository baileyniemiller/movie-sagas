import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class MovieItem extends Component {



  render() {
    return (
      <Route path="/">
        <div>
          <h1>Movies</h1>
          <img src={this.props.movies.poster}/>
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

export default connect(mapStateToProps)(withRouter(MovieItem));
