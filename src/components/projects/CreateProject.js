import React, { Component } from "react";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">New Project</h5>

          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input onChange={this.handleChange} type="text" id="title" />
          </div>

          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              onChange={this.handleChange}
              id="content"
              className="materialize-textarea"
            />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateProject;
