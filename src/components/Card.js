import React, { Component } from "react";
import {Avatar} from "./Avatar";
import {Avatar2} from "./Avatar";
import Detail from "./Detail";

export default class Card extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="card">
        <div className="top">
          <h2 className="name">{this.props.name}</h2>
          <Avatar imgSRC={this.props.imgSRC} />
          <Avatar2 imgSRC={this.props.imgSRC} />
        </div>
        <div className="bottom">
          <Detail phone={this.props.phone} email={this.props.email} />
        </div>
      </div>
    );
  }
}
