import React, { Component } from 'react'
import Button from "./Button"
import {Button2} from "./Button"
import {Button3} from "./Button"

export default class Counter extends Component {
    // constructor(){
    //     super();
    //     this.state={
    //         count:0
    //     },
    //     this.increase = this.increase.bind(this)
    // }

state ={
    count:0
}


 increase =()=>{
    this.setState({count: this.state.count + 1})
}


 decrease =()=>{
    this.setState({count: this.state.count - 1})
}


    render() {
        console.log(this.state.count)
        return (
            <div className="card">
                <h1>Counter is : {this.state.count}</h1>
                <Button increase={this.increase} decrease={this.decrease}/>
                <Button2 increase={this.increase} decrease={this.decrease}/>
                <Button3>
                {this.increase}{this.decrease}
                </Button3>
            </div>
        )
    }
}
