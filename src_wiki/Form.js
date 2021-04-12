import React, { Component } from "react";

export default class Form extends Component {
  state = {
    search: "",
  };

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.search);
    this.setState({search:""});
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="search">Search</label>
          <input
            type="text"
            name="search"
            id="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
