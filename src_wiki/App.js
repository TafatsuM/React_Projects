import React, { Component } from 'react'
import Form from "./Form";

export default class App extends Component {
  state= {
    data: ["", [], [], []]
  }

  handleSubmit=(data)=> {
    const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${data}&format=json&origin=*&limit=10`;

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({data:result});
      });
  }

  render() {
    return (
      <div className="container">
      <h1>Wikipedia Search with Function Component</h1>
      <Form handleSubmit={this.handleSubmit} />
      <ul>
        {this.state.data[3].map((entry, index) => {
          return (
            <a href={entry} target="_blank" rel="noreferrer" key={index}>
              <li>{entry}</li>
            </a>
          );
        })}
      </ul>
    </div>
    )
  }
}