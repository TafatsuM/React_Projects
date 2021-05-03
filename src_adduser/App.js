import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUpdating: false,
      selectedUser: [],
      users: [
        {
          name: "Charlie",
          job: "Janitor",
        },
        {
          name: "Mac",
          job: "Bouncer",
        },
        {
          name: "Dee",
          job: "Aspring actress",
        },
      ],
    };
  }

  newUser = (data) => {
    console.log('add new user çalıştı... name :')
    console.log('add new user çalıştı... name :', data.name )
    // const newUser = {
    //   name: "ali",
    //   job: "Kesici",
    // };
    //this.setState({users: [...this.state.users, newUser]})
    // this.state.users.push(newUser)
    // this.setState({users: this.state.users})
console.log(Math.floor(Math.random()*4))
    this.setState({ users: [...this.state.users, data] });
  };

  deleteUser = (name) => {
    console.log('delete user çalıştı...:', name )
    const filteredUsers = this.state.users.filter((user) => user.name !== name);
    //console.log(filteredUsers);
    this.setState({ users: filteredUsers });
    this.cancelUpdate()
  };

  editUser = (name) => {
    console.log("edit user çalıştı...:" , name);
    const filteredUser = this.state.users.filter((user) => user.name === name);
    //console.log(filteredUser);
    document.getElementById("myForm").reset();

    this.setState({ selectedUser: filteredUser });
    this.setState({ isUpdating: true });
  };

  updateUser=(user, data)=>{
    console.log('update user çalıştı...:')
    //console.log(user, data)
    // const n = this.state.users.findIndex(item => item.name === user.name)
    // let temp_state = [...this.state.users];
    // let temp_element = { ...temp_state[n] };
    // temp_element = data;
    // temp_state[n] = temp_element
    // this.setState({ users: temp_state  });
   
    this.setState({users:
      this.state.users.map(item => {
        if (item.name !== user.name) return item;
        return { ...item, name: data.name, job:data.job };
      })
    })
    this.cancelUpdate()
  }

  cancelUpdate=()=>{
    console.log('cancel çalıştı...')
    this.setState({ selectedUser: [] });
    this.setState({ isUpdating: false });
  }

  render() {
    console.log(this.state.users);
    console.log(this.state.selectedUser);
    return (
      <div className="container" style={{width: "45rem"}}>
        <h1>React List</h1>
        {this.state.isUpdating ? (
          <h2>Update character</h2>
        ) : (
          <h2>Add a character with a name and a job</h2>
        )}
        <Form
          newUser={this.newUser}
          updateUser={this.updateUser}
          cancelUpdate={this.cancelUpdate}
          isUpdating={this.state.isUpdating}
          selectedUser={this.state.selectedUser[0]}
        />
        <Table
          users={this.state.users}
          deleteUser={this.deleteUser}
          editUser={this.editUser}
        />
      </div>
    );
  }
}

export default App;
