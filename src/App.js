import React from 'react';

import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

//Will have state (Inventory:[]) Will have methods to get inventory from database

function App() {
  return (
    <div className="App">
     <Dashboard />
     <Form />
     <Header />
     
    </div>
  );
}

export default App;
