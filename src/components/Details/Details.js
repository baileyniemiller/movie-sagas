import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import './Details.css';

// Details Component
class Details extends Component {

  render() {
    return (
      // setting the route to /details
      <Route path="/details">
        <div>
          {/* Mapping through details in order to display each item. */}
          {this.props.details.map((x) => {
          return (
            <div>
              <h1 className="movTitle">{x.title}</h1>
              <img src={x.poster} className="movImg" />
              <p>Genre:</p>
                {/* Mapping through the genres because there might be more than
                    in the array that comes in from the reducer. */}
                {x.genres.map((genre) => {
                  return <p className="genreItem">{genre}</p>;
                })}
              <p className="movDescription">{x.description}</p>
              <Link to="edit">
                <button className="editButton">Edit</button>
              </Link>
            </div>
          );
          })}
        </div>
      </Route>
    );
  }
}

// bringing in the details to use as props
const mapStateToProps = (state) => {

  return {
    details: state.details,
  };
};

export default connect(mapStateToProps)(withRouter(Details));
                              
