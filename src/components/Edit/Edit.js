import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Edit extends Component {
    // setting local state for the inputs
    state = {
        title: '',
        description: '',
        id: 0
    }

    componentDidMount(){
     
        console.log(this.state);
        this.changeState()
    }
    compen
    
    changeState = () => {
        let value = 0
     for (let i = 0; i < this.props.details.length; i++) {
         const element = this.props.details[i];
        let value = element.id
        console.log(value);
        
       return this.setState({id: value})
     }
    }
    // when a use enters in a new title or description,
    // set state to that user input
    handleChange = (param, event) =>{
        this.setState({
            [param]: event.target.value
        })
    }
    
    // on submit, dispatch to 
    // handleSubmit = () => {
    //     this.props.dispatch({}) // TODO: need to finish dispatch FETCH_DETAILS
    // }

  render() {
    return (
      <div>
          {JSON.stringify(this.state)}
        <input type="text" className="titleInput" onChange={(event)=>this.handleChange("title",event)}/>
        <label for="titleInput">Title</label>
        <textarea className="descriptionInput" rows="4" cols="30" onChange={(event)=>this.handleChange("description",event)}></textarea>
        <label for="descriptionInput">Description</label>
        {/* <button onClick={this.handleSubmit()}>Submit</button> */}
      </div>
    )
  }
}

// bringing in the movie details to use as props
const mapStateToProps = (state) => {
    return {
      details: state.details,
    };
  };
  
  export default connect(mapStateToProps)(withRouter(Edit));