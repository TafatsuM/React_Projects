import React, { Component } from 'react'

export default class Detail extends Component {
    render() {
        return (
            <div>
                <p className="info">{this.props.phone}</p>
                <p className="info">{this.props.email}</p>
            </div>
        )
    }
}
