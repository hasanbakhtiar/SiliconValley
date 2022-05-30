import axios from 'axios';
import React, { Component } from 'react'
import Nav from './Nav'
import Search from './Search'
import Users from './Users'

class App extends Component {
  constructor(props){
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
    this.state={
      users: []
    }
  }

  searchUsers(keyword){
    axios
    .get(`https://api.github.com/search/users?q=${keyword}`)
    .then(gelen=>this.setState({users: gelen.data.items}));
  }
  render() {
    return (
      <div>
          <Nav title=" Github" url="https://github.com"/>
          <Search searchValue={this.searchUsers}/>
          <Users gelenIstifadeci={this.state.users}/>
      </div>
    )
  }
}

export default App