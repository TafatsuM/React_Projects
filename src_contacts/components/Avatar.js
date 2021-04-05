import React, { Component } from "react";

export class Avatar extends Component {
  render() {
    return (
      <div>
        <img className="circle-img" src={this.props.imgSRC} />
      </div>
    );
  }
}

export function Avatar2(props) {
  return (
    <div>
      <img className="circle-img" src={props.imgSRC} />
    </div>
  );
}
