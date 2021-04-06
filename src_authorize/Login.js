import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      authorized: false,
      input: "",
      count: 3,
    };
  }

  authorize = (event) => {
    event.preventDefault();
    
    console.log(this.state.input, this.props.user.password);
    if (this.state.input === this.props.user.password) {
      this.setState({ authorized: true });
    } else {
      this.setState({ count: this.state.count - 1 });
      console.log(this.state.count)
      if(this.state.count === 1) {
        alert('You have to wait 10 seconds because of wrong password')
        setTimeout(() => {
          this.setState({ count: 3 });
        }, 10000);
      }    
    }
    
  };


activateButton=()=>{
  if(this.state.count === 0) {
    alert('You have to wait 30 seconds because of wrong password')

    setTimeout(() => {
      this.setState({ count: 3 });
    }, 30000);


  }
}




  handleInput = (event) => {
    event.preventDefault();
    this.setState({ input: event.target.value });
  };

  render() {
    //console.log(this.state.authorized);
    //console.log(this.state.input);
    //console.log(this.state.count);
    //this.activateButton()
    let login = (
      <div className="card">
        <form className="form-inline" onSubmit={this.authorize}>
          <div className="form-group">
            <input
              // onInput={(e)=>this.setState({input:e.target.value})}
              onChange={this.handleInput}
              type="password"
              className="form-control mx-sm-3"
              placeholder="Password"
            />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={this.state.count === 0 ? true : false}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );

    let contact = (
      <div className="card">
        <div className="top">
          <h2 className="name">{this.props.user.name}</h2>
          <img className="circle-img" src={this.props.user.imgURL} />
        </div>
        <div className="bottom">
          <p className="info">{this.props.user.phone}</p>
          <p className="info">{this.props.user.mail}</p>
        </div>
      </div>
    );

    return (
      <div id="authorization">
        <h1>
          {this.state.authorized ? "Contact Profile" : "Enter the Password"}
        </h1>

        {this.state.authorized ? contact : login}
      </div>
    );
  }
}

export default Login;
