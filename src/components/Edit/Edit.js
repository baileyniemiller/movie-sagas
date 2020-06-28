import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import './Edit.css';
import swal from 'sweetalert';

class Edit extends Component {
    // setting local state for the inputs
    state = {
        title: '',
        description: '',
        id: 0
    }

    // calling changeState on componentDidMount
    componentDidMount(){
        this.changeState()
    }
    
    // when changeState is called, we are looping through the
    // details reducer in order to set state as the id
    // of the specific movie that was clicked.  Also, we are
    // setting the title and description to the current
    // values so when a user clicks edit they will see the original
    // title and description.
    changeState = () => {
        let value = 0
     for (let i = 0; i < this.props.details.length; i++) {
         const element = this.props.details[i];
        let value = element.id //id of the movie
        let title = element.title //title of the movie
        let description = element.description //description of the movie
        
       return this.setState({
         title: title,
         description: description,
         id: value
        })
     }
    }
    // when a use enters in a new title or description,
    // set state to that user input
    handleChange = (param, event) =>{
        this.setState({
            [param]: event.target.value
        })
    }
    
    // on submit, dispatch to EDIT_MOVIE
    handleSubmit = () => {
      swal({
        title: "Are you sure you'd like to save your changes?",
        buttons: true,
      })
      .then((willSave) => {
        if (willSave && this.state.title !== '' && this.state.description !== '') {
           this.props.dispatch({type:'EDIT_MOVIE', payload: this.state})
        }
      })
      // if the title and/or description is empty, send an alert.  
      // The inputs must not be left empty.  Otherwise, go ahead
      // and dispatch with the payload of the state.
      // if (this.state.title !== '' && this.state.description !== '') {
      //   this.props.dispatch({type:'EDIT_MOVIE', payload: this.state}) // TODO: need to finish dispatch FETCH_DETAILS
      // }else{
      //   alert('please make sure input are not empty')
      // }
    }

  render() {
    return (
      <div className="editDiv">
        <div>
          <h1 id="editTitle">Edit Movie Details Below</h1>
        </div>
        <input type="text" className="titleInput" value={this.state.title} onChange={(event)=>this.handleChange("title",event)}/>
        <br></br>
        <label for="titleInput" className="titleLabel">Title</label>
        <br></br>
        <textarea className="descriptionInput" rows="20" cols="40" value={this.state.description} onChange={(event)=>this.handleChange("description",event)}></textarea>
        <br></br>
        <label for="descriptionInput" className="descriptionLabel">Description</label>
        <br></br>
        <Link to="/details"><button onClick={()=>this.handleSubmit()} className="saveButton">Save</button></Link>
        <Link to="/details"><button className="backButton">Back to Details</button></Link>
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