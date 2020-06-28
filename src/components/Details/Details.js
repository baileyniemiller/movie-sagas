import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Details extends Component {
  componentDidMount(){
    console.log(this.props.details);
  }
  
  

  render() {
    return (
      <Route path="/details">
        <div>
          {this.props.details.map((x) => {
          return (
           <div>
              <h1>{x.title}</h1>
              <img src={x.poster}/>
              <p>{x.description}</p>
              <ul>
              {x.genres.map((genre) => {
                return (
                <li>
                  {genre}
                </li>
                )
              })}
              </ul>
            </div>
          )
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
    details: state.details,
  };
};

export default connect(mapStateToProps)(withRouter(Details));
