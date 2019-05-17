import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import {HashRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'

//Will have state (Inventory:[]) Will have methods to get inventory from database

class App extends  Component  {
  constructor(){
    super()
    this.state={
      inventory: [],
      current: []
    }
  }

componentDidMount=()=>{
  axios.get('/api/inventory').then((res)=>{
    this.setState({
      inventory: res.data
    })
  })
}

// componentDidUpdate=()=>{
//   axios.get('/api/inventory').then((res)=>{
//     this.setState({
//       inventory: res.data
//     })
//   })
// }

  render(){
  return (
    <div className="App">
      <Header />
     <Dashboard  inventory={this.state.inventory} getinventory={this.componentDidMount} updateinventory={this.componentDidUpdate}/>
     <Form getinventory={this.componentDidMount}/>
     
     
    </div>
  );
  }
}

export default App;
