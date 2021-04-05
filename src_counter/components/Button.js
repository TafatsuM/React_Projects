import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.increase}>Increase</button>
                <button onClick={this.props.decrease}>Decrease</button>
            </div>
        )
    }
}


export function Button2(props) {
    return (
        <div>
            <button onClick={props.increase}>IncFunc</button>
            <button onClick={props.decrease}>DecFunc</button>
        </div>
    )
}



export function Button3(props) {
    console.log(props)
    return (
        <div>
             <button onClick={props.children[0]}>Inc##Func</button>
            <button onClick={props.children[1]}>Dec##Func</button>
        </div>
    )
}

