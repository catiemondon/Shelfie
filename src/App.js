import React, { Component } from 'react';

import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

//Will have state (Inventory:[]) Will have methods to get inventory from database

class App extends  Component  {
  constructor(){
    super()
    this.state={
      inventory: [{name: 'Shoes', price: 29, imgurl: 'none'}, {name: 'Glasses', price: 77, imgurl: 'test'}],
    }
  }


  render(){
  return (
    <div className="App">
     <Dashboard  inventory={this.state.inventory}/>
     <Form />
     <Header />
     
    </div>
  );
  }
}

export default App;
